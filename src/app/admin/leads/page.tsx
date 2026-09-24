import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LeadsAccessGate } from "@/components/admin/leads-access-gate";
import { hasLeadsSession, LEADS_SESSION_COOKIE } from "@/lib/leads/access";
import { createLeadsClient } from "@/lib/leads/db";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 30;
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "America/Sao_Paulo",
});

async function signOut() {
  "use server";
  (await cookies()).delete(LEADS_SESSION_COOKIE);
  redirect("/admin/leads");
}

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  if (!(await hasLeadsSession())) return <LeadsAccessGate />;

  const supabase = createLeadsClient();
  if (!supabase) {
    return <main className="min-h-screen bg-paper px-5 pb-24 pt-36">Painel indisponível no momento.</main>;
  }

  const requestedPage = Number((await searchParams).page ?? "1");
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const { data: leads, count, error } = await supabase
    .from("anamnesis_leads")
    .select("id, created_at, name, experience, goal, health, period", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  return (
    <main className="min-h-screen bg-paper pb-24 pt-36">
      <div className="content-shell">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-8">
          <div>
            <p className="eyebrow">Área reservada</p>
            <h1 className="display-title mt-4 text-5xl text-forest sm:text-6xl">Fichas recebidas</h1>
            <p className="mt-4 text-sm text-ink-soft">{count ?? 0} {count === 1 ? "ficha registrada" : "fichas registradas"}</p>
          </div>
          <form action={signOut}><button className="button-outline !border-forest/30 !text-forest">Encerrar acesso</button></form>
        </div>

        {error ? (
          <p role="alert" className="mt-8 text-sm text-terracotta">Não foi possível carregar as fichas. Tente atualizar a página.</p>
        ) : leads?.length ? (
          <div className="mt-8 grid gap-5">
            {leads.map((lead) => (
              <article key={lead.id} className="border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-3xl font-semibold text-forest">{lead.name}</h2>
                  <time dateTime={lead.created_at} className="text-xs text-ink-soft">
                    {dateFormatter.format(new Date(lead.created_at))}
                  </time>
                </div>
                <dl className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
                  <div><dt className="font-semibold text-forest">Experiência</dt><dd className="mt-1 text-ink-soft">{lead.experience}</dd></div>
                  <div><dt className="font-semibold text-forest">Objetivo</dt><dd className="mt-1 text-ink-soft">{lead.goal}</dd></div>
                  <div><dt className="font-semibold text-forest">Melhor período</dt><dd className="mt-1 text-ink-soft">{lead.period}</dd></div>
                  <div><dt className="font-semibold text-forest">Cuidados informados</dt><dd className="mt-1 whitespace-pre-wrap text-ink-soft">{lead.health}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-ink-soft">Nenhuma ficha recebida até o momento.</p>
        )}

        {count && count > PAGE_SIZE ? (
          <nav className="mt-8 flex items-center justify-between text-sm" aria-label="Páginas de fichas">
            {page > 1 ? <Link href={`/admin/leads?page=${page - 1}`} className="text-forest underline">Anterior</Link> : <span />}
            <span>{page} de {Math.ceil(count / PAGE_SIZE)}</span>
            {page * PAGE_SIZE < count ? <Link href={`/admin/leads?page=${page + 1}`} className="text-forest underline">Próxima</Link> : <span />}
          </nav>
        ) : null}
      </div>
    </main>
  );
}
