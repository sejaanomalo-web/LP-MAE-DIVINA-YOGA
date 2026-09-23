import { NextResponse, type NextRequest } from "next/server";
import {
  createLeadsSession,
  isValidAccessToken,
  LEADS_SESSION_COOKIE,
  LEADS_SESSION_SECONDS,
} from "@/lib/leads/access";

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Origem inválida." }, { status: 403 });
  }

  let token = "";
  try {
    const body = await request.text();
    if (body.length > 256) throw new Error("Invalid payload");
    const parsed: unknown = JSON.parse(body);
    if (parsed && typeof parsed === "object" && "token" in parsed && typeof parsed.token === "string") {
      token = parsed.token;
    }
  } catch {
    return NextResponse.json({ error: "Link inválido." }, { status: 400 });
  }

  if (!isValidAccessToken(token)) {
    return NextResponse.json({ error: "Link inválido." }, { status: 401 });
  }

  const session = createLeadsSession();
  if (!session) {
    return NextResponse.json({ error: "Painel indisponível." }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "private, no-store" } });
  response.cookies.set(LEADS_SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: LEADS_SESSION_SECONDS,
  });
  return response;
}
