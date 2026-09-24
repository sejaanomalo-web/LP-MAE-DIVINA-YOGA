import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { ScheduleBoard } from "@/components/schedule/schedule-board";
import { decodeSchedule } from "@/lib/class-schedule";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Agenda de Aulas",
  description: "Dias, horários e informações para praticar na Mãe Divina Yôga.",
};

export default async function AgendaPage({
  searchParams,
}: {
  searchParams: Promise<{ agenda?: string }>;
}) {
  const { agenda } = await searchParams;
  const decoded = decodeSchedule(agenda);

  return (
    <main id="conteudo" className="min-h-screen bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="content-shell">
        <Link href="/contato" className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-terracotta">
          <ArrowLeft size={14} /> Contato e localização
        </Link>

        {!decoded.isValid ? (
          <p className="mt-8 border border-gold/35 bg-[#f7eedc] p-5 text-xs leading-6 text-ink-soft">
            Este link de agenda não pôde ser lido. Exibimos abaixo a programação padrão; confirme os horários com a equipe.
          </p>
        ) : null}

        <section className="mt-10 border border-ink/12 bg-[#fffaf5] p-6 md:p-10 lg:p-14">
          <ScheduleBoard schedule={decoded.schedule} />
        </section>

        <section className="mt-8 flex flex-col gap-6 bg-forest p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold">Primeira aula</p>
            <p className="mt-3 max-w-2xl font-display text-3xl leading-tight text-[#fffaf5] md:text-4xl">
              Ficou em dúvida sobre a melhor turma para você?
            </p>
          </div>
          <a
            href={whatsappUrl("Olá! Vi a agenda de aulas e quero ajuda para escolher uma turma.")}
            target="_blank"
            rel="noreferrer"
            className="button-light shrink-0"
          >
            Conversar com a equipe <MessageCircle size={15} />
          </a>
        </section>
      </div>
    </main>
  );
}
