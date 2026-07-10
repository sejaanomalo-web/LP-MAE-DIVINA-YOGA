import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { YogaEvent } from "@/data/events";
import { formatEventDate } from "@/lib/events";

const statusLabel = {
  confirmado: "Confirmado",
  "pre-agenda": "Programação em confirmação",
  gratuito: "Gratuito",
};

export function EventCard({ event }: { event: YogaEvent }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-ink/12 bg-[#fffaf5]">
      <Link href={`/eventos/${event.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <span className="absolute left-4 top-4 bg-forest px-3 py-2 text-[0.58rem] font-semibold uppercase text-white">
          {statusLabel[event.status]}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-[0.62rem] font-semibold uppercase text-terracotta">
          <span>{event.category.replaceAll("-", " ")}</span>
          <span>{formatEventDate(event)}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-[1.02] text-ink">{event.title}</h3>
        <p className="mt-4 flex-1 text-xs leading-6 text-ink-soft">{event.excerpt}</p>
        <div className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-[0.65rem] text-ink-soft">
          <p className="flex items-center gap-2"><Clock size={13} className="text-terracotta" /> {event.time}</p>
          <p className="flex items-center gap-2"><MapPin size={13} className="text-terracotta" /> {event.location}</p>
        </div>
        <Link
          href={`/eventos/${event.slug}`}
          className="mt-6 flex items-center justify-between text-[0.68rem] font-bold uppercase text-ink transition-colors hover:text-terracotta"
        >
          Saiba mais
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
