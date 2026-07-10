import { seedEvents, type YogaEvent } from "@/data/events";

export const EVENT_DRAFT_STORAGE_KEY = "mae-divina-event-drafts-v1";
const EVENT_DRAFT_CHANGE = "mae-divina-event-drafts-change";

let cachedRaw: string | null | undefined;
let cachedEvents: YogaEvent[] = seedEvents;

export function getEventDraftSnapshot(): YogaEvent[] {
  if (typeof window === "undefined") return seedEvents;

  const raw = window.localStorage.getItem(EVENT_DRAFT_STORAGE_KEY);
  if (raw === cachedRaw) return cachedEvents;

  cachedRaw = raw;
  if (!raw) {
    cachedEvents = seedEvents;
    return cachedEvents;
  }

  try {
    const parsed = JSON.parse(raw) as YogaEvent[];
    cachedEvents = Array.isArray(parsed) ? parsed : seedEvents;
  } catch {
    cachedEvents = seedEvents;
  }

  return cachedEvents;
}

export function getServerEventSnapshot() {
  return seedEvents;
}

export function subscribeToEventDrafts(callback: () => void) {
  const notify = () => callback();
  window.addEventListener("storage", notify);
  window.addEventListener(EVENT_DRAFT_CHANGE, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(EVENT_DRAFT_CHANGE, notify);
  };
}

export function saveEventDrafts(events: YogaEvent[]) {
  window.localStorage.setItem(EVENT_DRAFT_STORAGE_KEY, JSON.stringify(events));
  cachedRaw = undefined;
  window.dispatchEvent(new Event(EVENT_DRAFT_CHANGE));
}

export function resetEventDrafts() {
  window.localStorage.removeItem(EVENT_DRAFT_STORAGE_KEY);
  cachedRaw = undefined;
  window.dispatchEvent(new Event(EVENT_DRAFT_CHANGE));
}
