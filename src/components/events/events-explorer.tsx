"use client";

import { CalendarDays, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import { EventCard } from "@/components/events/event-card";
import { eventCategories } from "@/data/events";
import {
  getEventDraftSnapshot,
  getServerEventSnapshot,
  subscribeToEventDrafts,
} from "@/lib/event-drafts";
import { eventMonthKey, formatMonth, parseEventDate } from "@/lib/events";
import { whatsappUrl } from "@/lib/whatsapp";

export function EventsExplorer({ initialCategory = "todos" }: { initialCategory?: string }) {
  const events = useSyncExternalStore(
    subscribeToEventDrafts,
    getEventDraftSnapshot,
    getServerEventSnapshot,
  );
  const knownCategory = eventCategories.some((category) => category.value === initialCategory)
    ? initialCategory
    : "todos";
  const [category, setCategory] = useState(knownCategory);
  const months = useMemo(
    () => [...new Set(events.map((event) => eventMonthKey(event.date)))].sort(),
    [events],
  );
  const firstMatchingMonth =
    events.find((event) => category === "todos" || event.category === category)?.date.slice(0, 7) ??
    months[0] ??
    "2026-08";
  const [month, setMonth] = useState(firstMatchingMonth);

  const filtered = useMemo(
    () =>
      events
        .filter((event) => category === "todos" || event.category === category)
        .sort((a, b) => a.date.localeCompare(b.date)),
    [category, events],
  );

  const moveMonth = (direction: number) => {
    const currentIndex = months.indexOf(month);
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), months.length - 1);
    if (months[nextIndex]) setMonth(months[nextIndex]);
  };

  return (
    <div>
      <div className="overflow-x-auto border-b border-ink/15 pb-3">
        <div className="flex min-w-max gap-2" role="radiogroup" aria-label="Filtrar eventos por tema">
          {eventCategories.map((item) => (
            <button
              key={item.value}
              type="button"
              role="radio"
              aria-checked={category === item.value}
              onClick={() => {
                setCategory(item.value);
                const nextMonth = events.find(
                  (event) => item.value === "todos" || event.category === item.value,
                )?.date.slice(0, 7);
                if (nextMonth) setMonth(nextMonth);
              }}
              className={`min-h-10 border px-4 text-[0.64rem] font-semibold uppercase transition-colors ${
                category === item.value
                  ? "border-terracotta bg-terracotta text-white"
                  : "border-ink/15 text-ink-soft hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <section id="agenda" className="mt-12 border border-ink/12 bg-[#fffaf5] p-5 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-6">
          <div className="flex items-center gap-3">
            <CalendarDays size={20} className="text-terracotta" />
            <h2 className="font-display text-3xl font-semibold">{formatMonth(parseEventDate(`${month}-01`))}</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveMonth(-1)}
              disabled={months.indexOf(month) <= 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 disabled:opacity-25"
              aria-label="Mês anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => moveMonth(1)}
              disabled={months.indexOf(month) >= months.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 disabled:opacity-25"
              aria-label="Próximo mês"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <CalendarGrid month={month} events={events.filter((event) => eventMonthKey(event.date) === month)} />
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-6 border-b border-ink/15 pb-5">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase text-terracotta">Programação</p>
            <h2 className="mt-2 font-display text-4xl font-semibold">Todos os detalhes</h2>
          </div>
          <p className="text-xs text-ink-soft">{filtered.length} {filtered.length === 1 ? "encontro" : "encontros"}</p>
        </div>

        {filtered.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-64 flex-col items-center justify-center border border-dashed border-ink/20 bg-paper-warm p-8 text-center">
            <CalendarDays size={28} className="text-terracotta" />
            <h3 className="mt-5 font-display text-3xl font-semibold">Novas datas em preparação</h3>
            <p className="mt-3 max-w-md text-xs leading-6 text-ink-soft">
              Este tema ainda não tem uma data publicada. Fale com a casa para entrar na lista de interesse.
            </p>
            <a
              href={whatsappUrl(`Olá! Quero receber novidades sobre eventos de ${category}.`)}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-6"
            >
              Entrar na lista <MessageCircle size={15} />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

function CalendarGrid({ month, events }: { month: string; events: ReturnType<typeof getEventDraftSnapshot> }) {
  const [year, monthNumber] = month.split("-").map(Number);
  const firstWeekday = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const cells = Array.from({ length: firstWeekday + daysInMonth }, (_, index) =>
    index < firstWeekday ? null : index - firstWeekday + 1,
  );
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <div className="mt-6 overflow-x-auto">
      <div className="min-w-[680px]">
        <div className="grid grid-cols-7">
          {weekDays.map((day) => (
            <div key={day} className="border-b border-ink/10 pb-3 text-center text-[0.58rem] font-semibold uppercase text-ink/45">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day, index) => {
            const dayEvents = day
              ? events.filter((event) => Number(event.date.slice(-2)) === day)
              : [];
            return (
              <div
                key={`${day ?? "empty"}-${index}`}
                className="min-h-24 border-b border-r border-ink/8 p-2 first:border-l"
              >
                {day ? <span className="text-[0.65rem] text-ink/45">{String(day).padStart(2, "0")}</span> : null}
                {dayEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/eventos/${event.slug}`}
                    className="mt-2 block bg-terracotta px-2 py-2 text-[0.58rem] font-semibold leading-4 text-white transition-colors hover:bg-terracotta-deep"
                  >
                    {event.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
