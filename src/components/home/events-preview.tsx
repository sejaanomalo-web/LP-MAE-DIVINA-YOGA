import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { EventCard } from "@/components/events/event-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { seedEvents } from "@/data/events";

export function EventsPreview() {
  const featured = seedEvents.filter((event) => event.featured).slice(0, 3);

  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="content-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Calendário Yôga"
              title="Encontros que marcam o tempo."
              text="Práticas, estudos, celebrações e imersões para atravessar o ano com intenção. As datas desta primeira agenda estão em confirmação."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/eventos" className="button-primary shrink-0">
              Ver calendário completo
              <CalendarDays size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {featured.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.08} className="h-full">
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex items-center justify-between border-b border-t border-ink/15 py-6">
          <p className="text-xs leading-5 text-ink-soft">
            Quer propor uma vivência ou receber a agenda primeiro?
          </p>
          <Link href="/contato" className="flex items-center gap-2 text-xs font-bold uppercase text-terracotta">
            Falar com a casa <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
