import type { Metadata } from "next";
import { EventsExplorer } from "@/components/events/events-explorer";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Calendário de Eventos",
  description: "Calendário de vivências, oficinas, estudos e retiros da Mãe Divina Yôga.",
};

export default async function EventosPage({
  searchParams,
}: {
  searchParams: Promise<{ tema?: string }>;
}) {
  const { tema } = await searchParams;

  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Calendário Yôga"
        title="O ano como prática."
        text="Encontros, estudos e imersões para dar intenção ao tempo e profundidade à experiência."
        image="/images/pratica-em-dupla.jpg"
        imageAlt="Prática de Yoga ao ar livre"
        position="center 42%"
      />
      <section className="bg-paper py-20 md:py-28">
        <div className="content-shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Agenda 2026</p>
            <h2 className="display-title mt-5 text-[3.2rem] sm:text-[4.4rem] lg:text-[6rem]">Escolha o encontro que conversa com o seu momento.</h2>
            <p className="mt-6 text-xs leading-6 text-ink-soft">As datas desta primeira programação estão em confirmação. Consulte cada evento e valide as informações pelo WhatsApp.</p>
          </div>
          <EventsExplorer initialCategory={tema} />
        </div>
      </section>
    </main>
  );
}
