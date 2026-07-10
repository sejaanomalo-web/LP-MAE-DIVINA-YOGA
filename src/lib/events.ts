import type { YogaEvent } from "@/data/events";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  timeZone: "UTC",
});

const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function parseEventDate(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

export function formatEventDate(event: YogaEvent) {
  const start = dateFormatter.format(parseEventDate(event.date));
  if (!event.endDate) return start;

  const end = dateFormatter.format(parseEventDate(event.endDate));
  return `${start} a ${end}`;
}

export function formatMonth(date: Date) {
  const value = monthFormatter.format(date);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function eventMonthKey(date: string) {
  return date.slice(0, 7);
}
