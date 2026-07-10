import { ArrowUpRight, AtSign, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteContact } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function VisitSection() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <div className="content-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <span className="eyebrow">Venha para a casa</span>
            <h2 className="display-title mt-6 text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">Seu tapete pode começar aqui.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={siteContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-ink/20 pt-5"
            >
              <MapPin size={20} className="text-terracotta" />
              <p className="mt-5 text-xs font-semibold">{siteContact.addressLine}</p>
              <p className="mt-1 text-[0.66rem] text-ink-soft">{siteContact.addressDetail}</p>
              <ArrowUpRight size={15} className="mt-5 text-terracotta transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={whatsappUrl("Olá! Gostaria de conhecer a Mãe Divina Yôga.")}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-ink/20 pt-5"
            >
              <MessageCircle size={20} className="text-terracotta" />
              <p className="mt-5 text-xs font-semibold">{siteContact.whatsappDisplay}</p>
              <p className="mt-1 text-[0.66rem] text-ink-soft">Converse com a equipe</p>
              <ArrowUpRight size={15} className="mt-5 text-terracotta transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-ink/20 pt-5"
            >
              <AtSign size={20} className="text-terracotta" />
              <p className="mt-5 text-xs font-semibold">{siteContact.instagramHandle}</p>
              <p className="mt-1 text-[0.66rem] text-ink-soft">Acompanhe nossos ciclos</p>
              <ArrowUpRight size={15} className="mt-5 text-terracotta transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
