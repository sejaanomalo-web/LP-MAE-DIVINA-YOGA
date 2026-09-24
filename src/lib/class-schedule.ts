import { defaultClassSchedule, type ClassSchedule, type ClassScheduleSlot } from "@/data/class-schedule";

const MAX_SLOTS = 30;

export function cloneDefaultSchedule(): ClassSchedule {
  return {
    ...defaultClassSchedule,
    slots: defaultClassSchedule.slots.map((slot) => ({ ...slot })),
  };
}

export function encodeSchedule(schedule: ClassSchedule) {
  return encodeURIComponent(JSON.stringify({ version: 1, ...schedule }));
}

export function decodeSchedule(payload?: string): { schedule: ClassSchedule; isCustom: boolean; isValid: boolean } {
  if (!payload) return { schedule: cloneDefaultSchedule(), isCustom: false, isValid: true };

  try {
    const raw = payload.startsWith("{") ? payload : decodeURIComponent(payload);
    const parsed = JSON.parse(raw) as Partial<ClassSchedule> & { version?: number };
    if (parsed.version !== 1 || !Array.isArray(parsed.slots)) throw new Error("Agenda inválida");

    const slots = parsed.slots.slice(0, MAX_SLOTS).map(validateSlot).filter(Boolean) as ClassScheduleSlot[];
    if (!slots.length) throw new Error("Agenda sem horários");

    return {
      schedule: {
        title: cleanText(parsed.title, 80) || "Agenda de aulas",
        introduction: cleanText(parsed.introduction, 900),
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : undefined,
        slots,
      },
      isCustom: true,
      isValid: true,
    };
  } catch {
    return { schedule: cloneDefaultSchedule(), isCustom: false, isValid: false };
  }
}

function validateSlot(value: unknown): ClassScheduleSlot | null {
  if (!value || typeof value !== "object") return null;
  const slot = value as Partial<ClassScheduleSlot>;
  const day = cleanText(slot.day, 40);
  const time = cleanText(slot.time, 60);
  const activity = cleanText(slot.activity, 90);
  if (!day || !time || !activity) return null;

  return {
    id: cleanText(slot.id, 80) || `${day}-${time}-${activity}`,
    day,
    time,
    activity,
    teacher: cleanText(slot.teacher, 80),
    note: cleanText(slot.note, 180),
  };
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}
