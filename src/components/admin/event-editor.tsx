"use client";

import { Download, Pencil, Plus, RotateCcw, Save, Trash2, Upload } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState, useSyncExternalStore } from "react";
import { type EventStatus, type YogaEvent } from "@/data/events";
import {
  getEventDraftSnapshot,
  getServerEventSnapshot,
  resetEventDrafts,
  saveEventDrafts,
  subscribeToEventDrafts,
} from "@/lib/event-drafts";

const images = [
  "/images/aula-hatha.jpg",
  "/images/carol-retrato.jpg",
  "/images/casa-altar.jpg",
  "/images/casa-luz.jpg",
  "/images/pratica-em-dupla.jpg",
];

const emptyForm = {
  id: "",
  slug: "",
  title: "",
  category: "pranayama",
  date: "",
  endDate: "",
  time: "",
  location: "Mãe Divina Yôga",
  excerpt: "",
  description: "",
  image: images[0],
  imageAlt: "Evento da Mãe Divina Yôga",
  status: "pre-agenda" as EventStatus,
  featured: false,
  attractions: "",
  notIncluded: "",
};

type EventForm = typeof emptyForm;

export function EventEditor() {
  const events = useSyncExternalStore(
    subscribeToEventDrafts,
    getEventDraftSnapshot,
    getServerEventSnapshot,
  );
  const [form, setForm] = useState<EventForm>(emptyForm);
  const [notice, setNotice] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const update = <K extends keyof EventForm>(key: K, value: EventForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const startNew = () => {
    setForm(emptyForm);
    setNotice("");
  };

  const edit = (event: YogaEvent) => {
    setForm({
      ...event,
      endDate: event.endDate ?? "",
      featured: event.featured ?? false,
      attractions: event.attractions.join(", "),
      notIncluded: event.notIncluded.join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = (id: string) => {
    if (!window.confirm("Excluir este evento do rascunho local?")) return;
    saveEventDrafts(events.filter((event) => event.id !== id));
    if (form.id === id) startNew();
    setNotice("Evento removido do rascunho local.");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const slug = form.slug || slugify(form.title);
    const nextEvent: YogaEvent = {
      ...form,
      id: form.id || `${slug}-${Date.now()}`,
      slug,
      endDate: form.endDate || undefined,
      attractions: splitList(form.attractions),
      notIncluded: splitList(form.notIncluded),
    };
    const exists = events.some((item) => item.id === nextEvent.id);
    const nextEvents = exists
      ? events.map((item) => (item.id === nextEvent.id ? nextEvent : item))
      : [...events, nextEvent];
    saveEventDrafts(nextEvents.sort((a, b) => a.date.localeCompare(b.date)));
    setForm({
      ...nextEvent,
      endDate: nextEvent.endDate ?? "",
      featured: nextEvent.featured ?? false,
      attractions: nextEvent.attractions.join(", "),
      notIncluded: nextEvent.notIncluded.join(", "),
    });
    setNotice("Rascunho salvo neste navegador.");
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(events, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "eventos-mae-divina.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const importJson = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text()) as YogaEvent[];
      if (!Array.isArray(parsed)) throw new Error("Formato inválido");
      saveEventDrafts(parsed);
      setNotice(`${parsed.length} eventos importados.`);
    } catch {
      setNotice("Não foi possível importar este arquivo.");
    }
    event.target.value = "";
  };

  const reset = () => {
    if (!window.confirm("Descartar todos os rascunhos e voltar à agenda inicial?")) return;
    resetEventDrafts();
    setForm(emptyForm);
    setNotice("Agenda inicial restaurada.");
  };

  return (
    <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={submit} className="border border-ink/12 bg-[#fffaf5] p-6 md:p-8">
        <div className="flex items-center justify-between border-b border-ink/10 pb-5">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase text-terracotta">Editor</p>
            <h2 className="mt-1 font-display text-3xl font-semibold">{form.id ? "Editar evento" : "Novo evento"}</h2>
          </div>
          <button type="button" onClick={startNew} className="flex h-10 w-10 items-center justify-center border border-ink/15" aria-label="Novo evento">
            <Plus size={17} />
          </button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Título" className="sm:col-span-2">
            <input required value={form.title} onChange={(e) => update("title", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Slug">
            <input value={form.slug} onChange={(e) => update("slug", e.target.value)} placeholder="gerado pelo título" className="admin-input" />
          </Field>
          <Field label="Tema">
            <input required value={form.category} onChange={(e) => update("category", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Data">
            <input required type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Data final">
            <input type="date" value={form.endDate} onChange={(e) => update("endDate", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Horário">
            <input required value={form.time} onChange={(e) => update("time", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Local">
            <input required value={form.location} onChange={(e) => update("location", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Status">
            <select value={form.status} onChange={(e) => update("status", e.target.value as EventStatus)} className="admin-input">
              <option value="pre-agenda">Pré-agenda</option>
              <option value="confirmado">Confirmado</option>
              <option value="gratuito">Gratuito</option>
            </select>
          </Field>
          <Field label="Imagem">
            <select value={form.image} onChange={(e) => update("image", e.target.value)} className="admin-input">
              {images.map((image) => <option key={image} value={image}>{image.split("/").at(-1)}</option>)}
            </select>
          </Field>
          <Field label="Resumo" className="sm:col-span-2">
            <textarea required rows={3} value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} className="admin-input resize-none" />
          </Field>
          <Field label="Descrição" className="sm:col-span-2">
            <textarea required rows={5} value={form.description} onChange={(e) => update("description", e.target.value)} className="admin-input resize-none" />
          </Field>
          <Field label="Atrações, separadas por vírgula" className="sm:col-span-2">
            <input value={form.attractions} onChange={(e) => update("attractions", e.target.value)} className="admin-input" />
          </Field>
          <Field label="Não incluído, separado por vírgula" className="sm:col-span-2">
            <input value={form.notIncluded} onChange={(e) => update("notIncluded", e.target.value)} className="admin-input" />
          </Field>
          <label className="flex items-center gap-3 text-xs sm:col-span-2">
            <input type="checkbox" checked={form.featured} onChange={(e) => update("featured", e.target.checked)} className="h-4 w-4 accent-[#8c4a2f]" />
            Destacar este evento na página inicial
          </label>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-6">
          <button type="submit" className="button-primary"><Save size={15} /> Salvar rascunho</button>
          {notice ? <p className="text-xs text-forest-light">{notice}</p> : null}
        </div>
      </form>

      <div>
        <div className="flex flex-wrap gap-2 border-b border-ink/15 pb-5">
          <button type="button" onClick={exportJson} className="button-primary !min-h-10"><Download size={14} /> Exportar JSON</button>
          <button type="button" onClick={() => fileInput.current?.click()} className="border border-ink/15 px-4 text-[0.65rem] font-semibold uppercase"><Upload size={14} className="mr-2 inline" /> Importar</button>
          <input ref={fileInput} type="file" accept="application/json" onChange={importJson} className="hidden" />
          <button type="button" onClick={reset} className="border border-ink/15 px-4 text-[0.65rem] font-semibold uppercase text-terracotta"><RotateCcw size={14} className="mr-2 inline" /> Restaurar</button>
        </div>

        <div className="mt-5 space-y-3">
          {events.map((event) => (
            <article key={event.id} className="flex items-center justify-between gap-4 border border-ink/12 bg-[#fffaf5] p-4">
              <div className="min-w-0">
                <p className="truncate font-display text-2xl font-semibold">{event.title}</p>
                <p className="mt-1 text-[0.62rem] text-ink-soft">{event.date} · {event.category}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={() => edit(event)} className="flex h-9 w-9 items-center justify-center border border-ink/15" aria-label={`Editar ${event.title}`}><Pencil size={14} /></button>
                <button type="button" onClick={() => remove(event.id)} className="flex h-9 w-9 items-center justify-center border border-ink/15 text-terracotta" aria-label={`Excluir ${event.title}`}><Trash2 size={14} /></button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 border border-gold/35 bg-[#f7eedc] p-5 text-xs leading-6 text-ink-soft">
          <strong className="text-ink">Escopo atual:</strong> alterações ficam neste navegador e podem ser exportadas em JSON. Para publicação por múltiplos administradores, conecte esta mesma estrutura a Supabase ou a um CMS.
        </div>
      </div>
    </div>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`grid gap-2 text-[0.65rem] font-semibold uppercase text-ink-soft ${className}`}>{label}{children}</label>;
}

function splitList(value: string) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
