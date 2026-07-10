import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EventEditor } from "@/components/admin/event-editor";

export const metadata: Metadata = {
  title: "Rascunhos de Eventos",
  robots: { index: false, follow: false },
};

export default function AdminEventsPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-paper pb-24 pt-32">
      <div className="site-shell">
        <Link href="/eventos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-terracotta">
          <ArrowLeft size={14} /> Voltar ao calendário
        </Link>
        <div className="mt-8 border-b border-ink/15 pb-8">
          <p className="eyebrow">Área editorial</p>
          <h1 className="display-title mt-5 text-[3.5rem] sm:text-[4.8rem] lg:text-[6.5rem]">Rascunhos de eventos.</h1>
          <p className="mt-5 max-w-2xl text-xs leading-6 text-ink-soft">
            Edite a programação, visualize as mudanças neste navegador e exporte o JSON para publicação. Esta área não possui autenticação no primeiro escopo.
          </p>
        </div>
        <div className="mt-10">
          <EventEditor />
        </div>
      </div>
    </main>
  );
}
