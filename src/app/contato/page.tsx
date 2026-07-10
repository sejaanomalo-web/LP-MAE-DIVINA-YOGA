import type { Metadata } from "next";
import { ArrowRight, AtSign, MapPin, MessageCircle, Play } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { indicativeSchedule, siteContact } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato e Agenda",
  description: "Horários, endereço, WhatsApp e canais da Mãe Divina Yôga em Cascavel.",
};

export default function ContatoPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Contato e agenda"
        title="Vamos respirar juntos."
        text="Encontre uma turma, conheça a casa ou converse sobre a prática que faz sentido para o seu momento."
        image="/images/casa-luz.jpg"
        imageAlt="Interior da Mãe Divina Yôga"
      />

      <section id="horarios" className="bg-paper py-24 md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">Horários</p>
            <h2 className="display-title mt-6 text-[3.4rem] sm:text-[4.6rem] lg:text-[6.5rem]">Escolha um espaço na semana para você.</h2>
            <p className="mt-7 text-xs leading-6 text-ink-soft">Grade indicativa. Turmas, vagas e horários podem mudar; confirme sempre pelo WhatsApp.</p>
            <a href={whatsappUrl("Olá! Quero receber a grade atual de aulas da Mãe Divina Yôga.")} target="_blank" rel="noreferrer" className="button-primary mt-8">Receber grade atual <MessageCircle size={15} /></a>
          </Reveal>
          <div className="border-t border-ink/15">
            {indicativeSchedule.map((item, index) => (
              <Reveal key={item.day} delay={index * 0.05} className="grid grid-cols-[110px_1fr] gap-5 border-b border-ink/15 py-6 md:grid-cols-[170px_1fr]">
                <p className="font-display text-2xl font-semibold">{item.day}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-soft">
                  {item.times.map((time) => <span key={time}>{time}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-36">
        <div className="content-shell grid gap-8 md:grid-cols-3">
          <Reveal className="border-t border-ink/20 pt-6">
            <MapPin size={22} className="text-terracotta" />
            <h2 className="mt-8 font-display text-4xl font-semibold">Visite</h2>
            <p className="mt-4 text-xs leading-6 text-ink-soft">{siteContact.addressLine}<br />{siteContact.addressDetail}</p>
            <a href={siteContact.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta">Abrir mapa <ArrowRight size={14} /></a>
          </Reveal>
          <Reveal delay={0.08} className="border-t border-ink/20 pt-6">
            <MessageCircle size={22} className="text-terracotta" />
            <h2 className="mt-8 font-display text-4xl font-semibold">Converse</h2>
            <p className="mt-4 text-xs leading-6 text-ink-soft">{siteContact.whatsappDisplay}<br />Aulas, eventos, loja e empresas</p>
            <a href={whatsappUrl("Olá! Vim pelo site da Mãe Divina Yôga.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta">Abrir WhatsApp <ArrowRight size={14} /></a>
          </Reveal>
          <Reveal delay={0.16} className="border-t border-ink/20 pt-6">
            <AtSign size={22} className="text-terracotta" />
            <h2 className="mt-8 font-display text-4xl font-semibold">Acompanhe</h2>
            <p className="mt-4 text-xs leading-6 text-ink-soft">{siteContact.instagramHandle}<br />Práticas, agenda e bastidores</p>
            <a href={siteContact.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta">Abrir Instagram <ArrowRight size={14} /></a>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="content-shell overflow-hidden border border-ink/12">
          <iframe
            title="Localização da Mãe Divina Yôga"
            src="https://www.google.com/maps?q=Rua+Castro+Alves+2444,+Centro,+Cascavel+-+PR&output=embed"
            width="100%"
            height="430"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block border-0 grayscale-[0.15]"
          />
        </div>
      </section>

      <section id="youtube" className="bg-forest py-20 text-white md:py-28">
        <Reveal className="content-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <Play size={23} className="mt-1 shrink-0 text-gold" />
            <div>
              <p className="text-[0.62rem] font-semibold uppercase text-gold">YouTube</p>
              <p className="mt-3 max-w-2xl font-display text-4xl font-medium text-[#fffaf5] md:text-5xl">Canal em preparação.</p>
              <p className="mt-4 max-w-xl text-xs leading-6 text-white/58">O link oficial ainda não foi confirmado. Até lá, acompanhe os conteúdos e avisos pelo Instagram.</p>
            </div>
          </div>
          <a href={siteContact.instagram} target="_blank" rel="noreferrer" className="button-light shrink-0">Ver Instagram <AtSign size={15} /></a>
        </Reveal>
      </section>

      <section className="bg-terracotta py-20 text-white md:py-28">
        <Reveal className="content-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-display text-4xl font-medium leading-[1.05] md:text-5xl">Quer começar com uma aula experimental?</p>
          <Link href="/#aula-gratis" className="button-light shrink-0">Preencher ficha de anamnese <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </main>
  );
}
