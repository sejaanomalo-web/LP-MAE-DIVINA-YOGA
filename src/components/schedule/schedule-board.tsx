import { CalendarDays, Clock3, MessageCircle, UserRound } from "lucide-react";
import { type ClassSchedule } from "@/data/class-schedule";
import { whatsappUrl } from "@/lib/whatsapp";

export function ScheduleBoard({ schedule }: { schedule: ClassSchedule }) {
  return (
    <div>
      <div className="max-w-4xl">
        <p className="eyebrow">Programação de aulas</p>
        <h1 className="display-title mt-5 text-[3.6rem] sm:text-[5rem] lg:text-[7rem]">{schedule.title}</h1>
        {schedule.introduction ? (
          <p className="mt-7 max-w-3xl text-sm leading-7 text-ink-soft md:text-base">{schedule.introduction}</p>
        ) : null}
        {schedule.updatedAt ? (
          <p className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-terracotta">
            Atualizada em {formatUpdatedAt(schedule.updatedAt)}
          </p>
        ) : null}
      </div>

      <div className="mt-14 border-t border-ink/15">
        {schedule.slots.map((slot, index) => (
          <article
            key={`${slot.id}-${index}`}
            className="grid gap-5 border-b border-ink/15 py-7 md:grid-cols-[1fr_1fr_1.35fr_auto] md:items-center"
          >
            <div className="flex items-center gap-3">
              <CalendarDays size={17} className="shrink-0 text-terracotta" />
              <p className="font-display text-2xl font-semibold">{slot.day}</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-ink-soft">
              <Clock3 size={15} className="shrink-0 text-terracotta" />
              {slot.time}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{slot.activity}</p>
              {slot.teacher ? (
                <p className="mt-1 flex items-center gap-2 text-xs text-ink-soft">
                  <UserRound size={13} /> {slot.teacher}
                </p>
              ) : null}
              {slot.note ? <p className="mt-2 text-xs leading-5 text-ink-soft">{slot.note}</p> : null}
            </div>
            <a
              href={whatsappUrl(`Olá! Quero saber mais sobre ${slot.activity}, ${slot.day}, ${slot.time}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-terracotta/35 px-4 text-[0.65rem] font-bold uppercase text-terracotta transition-colors hover:bg-terracotta hover:text-white"
            >
              Consultar <MessageCircle size={14} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function formatUpdatedAt(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recentemente";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "America/Sao_Paulo" }).format(date);
}
