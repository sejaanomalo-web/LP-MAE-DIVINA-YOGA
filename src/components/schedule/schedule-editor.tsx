"use client";

import { ArrowDown, ArrowUp, Copy, ExternalLink, MessageCircle, Plus, RotateCcw, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import { ScheduleBoard } from "@/components/schedule/schedule-board";
import { type ClassSchedule, type ClassScheduleSlot } from "@/data/class-schedule";
import { cloneDefaultSchedule, decodeSchedule, encodeSchedule } from "@/lib/class-schedule";

const STORAGE_KEY = "mae-divina-class-schedule";

export function ScheduleEditor() {
  const savedDraft = useSyncExternalStore(subscribeToDraft, getDraftSnapshot, getServerDraftSnapshot);
  const decoded = decodeSchedule(savedDraft ?? undefined);
  const initialSchedule = decoded.isValid && decoded.isCustom ? decoded.schedule : cloneDefaultSchedule();

  return <ScheduleEditorForm key={savedDraft ?? "default"} initialSchedule={initialSchedule} />;
}

function ScheduleEditorForm({ initialSchedule }: { initialSchedule: ClassSchedule }) {
  const [schedule, setSchedule] = useState<ClassSchedule>(initialSchedule);
  const [notice, setNotice] = useState("");

  const previewHref = useMemo(() => `/agenda?agenda=${encodeSchedule(schedule)}`, [schedule]);

  const updateSlot = (id: string, key: keyof ClassScheduleSlot, value: string) => {
    setSchedule((current) => ({
      ...current,
      slots: current.slots.map((slot) => (slot.id === id ? { ...slot, [key]: value } : slot)),
    }));
  };

  const addSlot = () => {
    setSchedule((current) => ({
      ...current,
      slots: [
        ...current.slots,
        {
          id: `horario-${Date.now()}`,
          day: "",
          time: "",
          activity: "Hatha Yoga",
          teacher: "",
          note: "",
        },
      ],
    }));
  };

  const removeSlot = (id: string) => {
    setSchedule((current) => ({ ...current, slots: current.slots.filter((slot) => slot.id !== id) }));
  };

  const moveSlot = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= schedule.slots.length) return;
    const slots = [...schedule.slots];
    [slots[index], slots[target]] = [slots[target], slots[index]];
    setSchedule((current) => ({ ...current, slots }));
  };

  const saveDraft = (event?: FormEvent) => {
    event?.preventDefault();
    window.localStorage.setItem(STORAGE_KEY, decodeURIComponent(encodeSchedule(schedule)));
    setNotice("Rascunho salvo neste dispositivo.");
  };

  const publishableSchedule = () => ({ ...schedule, updatedAt: new Date().toISOString() });

  const getShareUrl = (published: ClassSchedule) =>
    `${window.location.origin}/agenda?agenda=${encodeSchedule(published)}`;

  const copyLink = async () => {
    if (!schedule.slots.length) {
      setNotice("Adicione pelo menos um horário antes de compartilhar.");
      return;
    }
    const published = publishableSchedule();
    try {
      await navigator.clipboard.writeText(getShareUrl(published));
      setSchedule(published);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, ...published }));
      setNotice("Link da agenda copiado. Ele já pode ser enviado às alunas.");
    } catch {
      setNotice("Não foi possível copiar automaticamente. Abra a prévia e copie o endereço do navegador.");
    }
  };

  const shareWhatsApp = () => {
    if (!schedule.slots.length) {
      setNotice("Adicione pelo menos um horário antes de compartilhar.");
      return;
    }
    const published = publishableSchedule();
    const url = getShareUrl(published);
    setSchedule(published);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, ...published }));
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`Olá! Confira a agenda atual de aulas da Mãe Divina Yôga:\n${url}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const reset = () => {
    if (!window.confirm("Voltar à agenda padrão e descartar o rascunho deste dispositivo?")) return;
    window.localStorage.removeItem(STORAGE_KEY);
    setSchedule(cloneDefaultSchedule());
    setNotice("Agenda padrão restaurada.");
  };

  return (
    <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr]">
      <form onSubmit={saveDraft} className="border border-ink/12 bg-[#fffaf5] p-6 md:p-8">
        <div className="border-b border-ink/10 pb-6">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-terracotta">Conteúdo da agenda</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">Apresentação e horários</h2>
          <p className="mt-3 text-xs leading-6 text-ink-soft">
            O link compartilhado preserva esta versão da agenda. Alterações futuras geram um novo link.
          </p>
        </div>

        <div className="mt-6 grid gap-5">
          <Field label="Título da agenda">
            <input
              required
              value={schedule.title}
              onChange={(event) => setSchedule((current) => ({ ...current, title: event.target.value }))}
              className="admin-input"
              maxLength={80}
            />
          </Field>
          <Field label="Apresentação para as alunas">
            <textarea
              required
              value={schedule.introduction}
              onChange={(event) => setSchedule((current) => ({ ...current, introduction: event.target.value }))}
              className="admin-input min-h-36 resize-y"
              maxLength={900}
              placeholder="Explique como são as aulas, para quem são e o que a aluna precisa saber antes de escolher um horário."
            />
          </Field>
        </div>

        <div className="mt-8 space-y-4">
          {schedule.slots.map((slot, index) => (
            <fieldset key={slot.id} className="border border-ink/12 bg-paper p-4">
              <legend className="px-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-terracotta">
                Horário {index + 1}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Dia">
                  <input required value={slot.day} onChange={(e) => updateSlot(slot.id, "day", e.target.value)} className="admin-input !bg-white" />
                </Field>
                <Field label="Horário">
                  <input required value={slot.time} onChange={(e) => updateSlot(slot.id, "time", e.target.value)} className="admin-input !bg-white" />
                </Field>
                <Field label="Aula / atividade">
                  <input required value={slot.activity} onChange={(e) => updateSlot(slot.id, "activity", e.target.value)} className="admin-input !bg-white" />
                </Field>
                <Field label="Professor(a)">
                  <input value={slot.teacher} onChange={(e) => updateSlot(slot.id, "teacher", e.target.value)} className="admin-input !bg-white" />
                </Field>
                <Field label="Observação" className="sm:col-span-2">
                  <input value={slot.note} onChange={(e) => updateSlot(slot.id, "note", e.target.value)} className="admin-input !bg-white" />
                </Field>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <IconButton label="Mover horário para cima" onClick={() => moveSlot(index, -1)} disabled={index === 0}><ArrowUp size={14} /></IconButton>
                <IconButton label="Mover horário para baixo" onClick={() => moveSlot(index, 1)} disabled={index === schedule.slots.length - 1}><ArrowDown size={14} /></IconButton>
                <IconButton label="Excluir horário" onClick={() => removeSlot(slot.id)} danger><Trash2 size={14} /></IconButton>
              </div>
            </fieldset>
          ))}
        </div>

        <button type="button" onClick={addSlot} className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 border border-dashed border-terracotta/45 text-[0.68rem] font-bold uppercase text-terracotta">
          <Plus size={15} /> Adicionar horário
        </button>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-ink/10 pt-6">
          <button type="submit" className="button-primary"><Save size={15} /> Salvar rascunho</button>
          <button type="button" onClick={reset} className="inline-flex min-h-12 items-center gap-2 border border-ink/15 px-4 text-[0.68rem] font-bold uppercase text-ink-soft"><RotateCcw size={15} /> Restaurar</button>
        </div>
      </form>

      <div>
        <div className="sticky top-24">
          <div className="flex flex-wrap gap-3 border-b border-ink/15 pb-6">
            <button type="button" onClick={copyLink} className="button-primary"><Copy size={15} /> Copiar link</button>
            <button type="button" onClick={shareWhatsApp} className="button-primary !bg-forest"><MessageCircle size={15} /> Enviar no WhatsApp</button>
            <Link href={previewHref} target="_blank" className="inline-flex min-h-12 items-center gap-2 border border-ink/15 px-4 text-[0.68rem] font-bold uppercase text-ink">
              Abrir prévia <ExternalLink size={14} />
            </Link>
          </div>
          {notice ? <p role="status" className="mt-4 border border-gold/35 bg-[#f7eedc] p-4 text-xs leading-6 text-ink-soft">{notice}</p> : null}
          <div className="mt-7 max-h-[calc(100vh-190px)] overflow-y-auto border border-ink/12 bg-paper p-5 md:p-7">
            <ScheduleBoard schedule={schedule} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`grid gap-2 text-[0.63rem] font-semibold uppercase text-ink-soft ${className}`}>{label}{children}</label>;
}

function IconButton({ label, onClick, disabled = false, danger = false, children }: { label: string; onClick: () => void; disabled?: boolean; danger?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex h-9 w-9 items-center justify-center border border-ink/15 disabled:cursor-not-allowed disabled:opacity-25 ${danger ? "text-terracotta" : "text-ink-soft"}`}
      aria-label={label}
    >
      {children}
    </button>
  );
}

function subscribeToDraft() {
  return () => undefined;
}

function getDraftSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerDraftSnapshot() {
  return null;
}
