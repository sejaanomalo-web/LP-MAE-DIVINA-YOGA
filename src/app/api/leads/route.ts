import { NextResponse, type NextRequest } from "next/server";
import { createLeadsClient } from "@/lib/leads/db";

const experienceOptions = ["Nunca pratiquei", "Já pratiquei", "Pratico atualmente"];
const goalOptions = ["Reduzir estresse", "Cuidar de dores", "Ganhar mobilidade", "Meditar melhor", "Autoconhecimento"];
const periodOptions = ["Manhã", "Tarde", "Noite", "Quero ver a grade"];

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Origem inválida." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json({ error: "Formato inválido." }, { status: 415 });
  }

  const supabase = createLeadsClient();
  if (!supabase) {
    return NextResponse.json({ error: "Cadastro indisponível no momento." }, { status: 503 });
  }

  const raw = await request.text();
  if (raw.length > 8000) {
    return NextResponse.json({ error: "Resposta muito longa." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid payload");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  if (body.website) return new NextResponse(null, { status: 204 });

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const health = typeof body.health === "string" ? body.health.trim() : "";
  const experience = typeof body.experience === "string" ? body.experience : "";
  const goal = typeof body.goal === "string" ? body.goal : "";
  const period = typeof body.period === "string" ? body.period : "";
  if (
    body.consent !== true ||
    name.length < 2 || name.length > 120 ||
    health.length < 2 || health.length > 1000 ||
    !experienceOptions.includes(experience) ||
    !goalOptions.includes(goal) ||
    !periodOptions.includes(period)
  ) {
    return NextResponse.json({ error: "Confira as respostas e a autorização." }, { status: 400 });
  }

  const { error } = await supabase.from("anamnesis_leads").insert({ name, experience, goal, health, period });
  if (error) {
    console.error("Falha ao registrar ficha de aula experimental:", error.code);
    return NextResponse.json({ error: "Não foi possível salvar a ficha. Tente novamente." }, { status: 500 });
  }

  return new NextResponse(null, { status: 201, headers: { "Cache-Control": "no-store" } });
}
