import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScheduleEditor } from "@/components/schedule/schedule-editor";

export const metadata: Metadata = {
  title: "Editor da Agenda de Aulas",
  robots: { index: false, follow: false },
};

export default function AdminAgendaPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-paper pb-24 pt-32">
      <div className="site-shell">
        <Link href="/agenda" className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-terracotta">
          <ArrowLeft size={14} /> Ver agenda pública
        </Link>
        <div className="mt-8 border-b border-ink/15 pb-8">
          <p className="eyebrow">Área do Reinor</p>
          <h1 className="display-title mt-5 text-[3.5rem] sm:text-[4.8rem] lg:text-[6.5rem]">Editor da agenda.</h1>
          <p className="mt-5 max-w-3xl text-xs leading-6 text-ink-soft">
            Atualize a apresentação e os horários, confira a prévia e gere um link pronto para enviar às alunas.
          </p>
        </div>
        <div className="mt-10">
          <ScheduleEditor />
        </div>
      </div>
    </main>
  );
}
