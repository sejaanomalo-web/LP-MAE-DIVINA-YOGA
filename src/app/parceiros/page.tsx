import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, AtSign, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PartnerLogo } from "@/components/partners/partner-logo";
import { Reveal } from "@/components/ui/reveal";
import { partners, type Partner } from "@/data/partners";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Parceiros",
  description: "Conheça as empresas parceiras da Mãe Divina Yôga e o sentido de cada parceria.",
};

const PENDING = "Informações em preparação.";

export default function ParceirosPage() {
  return (
    <main id="conteudo" className="bg-paper">
      <section className="pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="content-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-terracotta">
            <ArrowLeft size={14} /> Voltar para a página inicial
          </Link>

          <Reveal className="mt-10 max-w-3xl">
            <p className="eyebrow">Parceiros</p>
            <h1 className="display-title mt-5 text-[3.4rem] sm:text-[4.6rem] lg:text-[6.5rem]">Quem caminha com a gente</h1>
            <p className="mt-6 text-sm leading-7 text-ink-soft md:text-base">
              Conheça as empresas parceiras da Mãe Divina Yôga.
            </p>
          </Reveal>

          {/* Índice rápido: cada logo leva à apresentação completa do parceiro */}
          <nav aria-label="Parceiros" className="mt-12">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <a href={`#${partner.id}`} className="block transition-opacity hover:opacity-80">
                    <PartnerLogo partner={partner} />
                    <span className="mt-2 block text-center text-[0.66rem] font-semibold uppercase text-ink-soft">
                      {partner.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {partners.map((partner, index) => (
        <PartnerProfile key={partner.id} partner={partner} index={index} />
      ))}

      <section className="bg-forest py-16 text-white md:py-24">
        <div className="content-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold">Parcerias</p>
            <p className="mt-3 max-w-2xl font-display text-3xl leading-tight text-[#fffaf5] md:text-4xl">
              Sua empresa também quer caminhar com a Mãe Divina?
            </p>
          </div>
          <a
            href={whatsappUrl("Olá! Tenho interesse em ser parceiro da Mãe Divina Yôga.")}
            target="_blank"
            rel="noreferrer"
            className="button-light shrink-0"
          >
            Falar com a equipe <MessageCircle size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}

function PartnerProfile({ partner, index }: { partner: Partner; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const alt = index % 2 === 1;

  return (
    <section
      id={partner.id}
      aria-labelledby={`${partner.id}-title`}
      className={`scroll-mt-24 border-t border-ink/10 py-16 md:py-24 ${alt ? "bg-paper-warm" : "bg-paper"}`}
    >
      <div className="content-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-[0.62rem] font-semibold text-ink/40">{number}</span>
          <PartnerLogo partner={partner} className="mt-4 !h-36 md:!h-44" />
          {partner.url || partner.instagram ? (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[0.66rem] font-bold uppercase text-terracotta">
                  <Globe size={14} /> Site oficial <ArrowUpRight size={13} />
                </a>
              ) : null}
              {partner.instagram ? (
                <a href={partner.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[0.66rem] font-bold uppercase text-terracotta">
                  <AtSign size={14} /> Instagram <ArrowUpRight size={13} />
                </a>
              ) : null}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.06}>
          {partner.segment ? <p className="eyebrow">{partner.segment}</p> : null}
          <h2 id={`${partner.id}-title`} className="display-title mt-4 text-[2.8rem] sm:text-[3.6rem] lg:text-[4.6rem]">
            {partner.name}
          </h2>

          <dl className="mt-10 border-t border-ink/15">
            <ProfileRow label="Por que caminhamos juntos" value={partner.why} />
            <ProfileRow label="Quem é" value={partner.description} />
            <ProfileRow label="Para nossos alunos" value={partner.benefit} />
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function ProfileRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="grid gap-2 border-b border-ink/15 py-6 md:grid-cols-[200px_1fr] md:gap-8">
      <dt className="text-[0.66rem] font-bold uppercase tracking-[0.08em] text-terracotta">{label}</dt>
      <dd className={`text-sm leading-7 ${value ? "text-ink-soft" : "italic text-ink/40"}`}>{value ?? PENDING}</dd>
    </div>
  );
}
