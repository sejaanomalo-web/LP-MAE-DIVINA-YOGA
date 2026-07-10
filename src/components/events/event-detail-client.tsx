"use client";

import { ArrowLeft, Check, Clock, MapPin, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  getEventDraftSnapshot,
  getServerEventSnapshot,
  subscribeToEventDrafts,
} from "@/lib/event-drafts";
import { formatEventDate } from "@/lib/events";
import { whatsappUrl } from "@/lib/whatsapp";

export function EventDetailClient({ slug }: { slug: string }) {
  const events = useSyncExternalStore(
    subscribeToEventDrafts,
    getEventDraftSnapshot,
    getServerEventSnapshot,
  );
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return (
      <main id="conteudo" className="flex min-h-[75svh] items-center bg-paper pt-28">
        <div className="content-shell py-24 text-center">
          <p className="eyebrow">Agenda</p>
          <h1 className="display-title mt-6 text-6xl">Evento não encontrado.</h1>
          <Link href="/eventos" className="button-primary mt-9">
            <ArrowLeft size={16} /> Voltar ao calendário
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="conteudo">
      <section className="relative min-h-[680px] overflow-hidden bg-forest pt-24">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(18,29,23,0.68)]" />
        <div className="site-shell relative flex min-h-[580px] items-end pb-16">
          <div className="max-w-4xl">
            <Link href="/eventos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-white/65 hover:text-white">
              <ArrowLeft size={14} /> Calendário
            </Link>
            <p className="eyebrow mt-10 !text-gold">{event.category.replaceAll("-", " ")}</p>
            <h1 className="display-title mt-5 text-[4rem] text-[#fffaf5] sm:text-[5.6rem] lg:text-[8rem]">{event.title}</h1>
            <p className="mt-7 max-w-2xl border-l border-white/35 pl-5 text-sm leading-7 text-white/72 md:text-base">
              {event.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit border-y border-ink/15 py-7 lg:sticky lg:top-28">
            <p className="text-[0.6rem] font-semibold uppercase text-terracotta">Informações</p>
            <dl className="mt-6 space-y-6 text-xs">
              <div className="flex gap-3">
                <Clock size={17} className="shrink-0 text-terracotta" />
                <div><dt className="font-semibold">Data e horário</dt><dd className="mt-1 leading-5 text-ink-soft">{formatEventDate(event)}<br />{event.time}</dd></div>
              </div>
              <div className="flex gap-3">
                <MapPin size={17} className="shrink-0 text-terracotta" />
                <div><dt className="font-semibold">Local</dt><dd className="mt-1 leading-5 text-ink-soft">{event.location}</dd></div>
              </div>
            </dl>
            <a
              href={whatsappUrl(`Olá! Quero saber mais sobre o evento ${event.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-8 w-full"
            >
              Quero participar <MessageCircle size={15} />
            </a>
          </aside>

          <article>
            <p className="eyebrow">Sobre o encontro</p>
            <h2 className="display-title mt-5 text-[3rem] sm:text-[4rem] lg:text-[5.5rem]">Um tempo reservado para a experiência.</h2>
            <p className="body-copy mt-8 max-w-3xl">{event.description}</p>

            <div className="mt-14 grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-3xl font-semibold">O que você encontra</h3>
                <ul className="mt-6 space-y-4">
                  {event.attractions.map((item) => (
                    <li key={item} className="flex gap-3 text-xs leading-5 text-ink-soft">
                      <Check size={15} className="mt-0.5 shrink-0 text-forest-light" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold">Não está incluído</h3>
                <ul className="mt-6 space-y-4">
                  {event.notIncluded.map((item) => (
                    <li key={item} className="flex gap-3 text-xs leading-5 text-ink-soft">
                      <X size={15} className="mt-0.5 shrink-0 text-terracotta" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 border border-terracotta/25 bg-sand p-7 md:p-10">
              <p className="font-display text-3xl font-medium">Programação em confirmação</p>
              <p className="mt-3 text-xs leading-6 text-ink-soft">
                Datas, valores e itens podem ser ajustados pela organização. Confirme as informações finais pelo WhatsApp antes de se programar.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
