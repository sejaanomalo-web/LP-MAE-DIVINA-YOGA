import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PartnerLogo } from "@/components/partners/partner-logo";
import { Reveal } from "@/components/ui/reveal";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Parceiros",
  description: "Conheça as empresas parceiras da Mãe Divina Yôga.",
};

export default function ParceirosPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-paper pb-24 pt-32 md:pb-32 md:pt-40">
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

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <li key={partner.id} className="h-full">
              <Reveal delay={index * 0.05} className="flex h-full flex-col border border-ink/12 bg-[#fffaf5] p-5 md:p-6">
                <PartnerLogo partner={partner} />
                <h2 className="mt-5 font-display text-2xl font-semibold leading-tight">{partner.name}</h2>
                {partner.description ? (
                  <p className="mt-3 text-xs leading-6 text-ink-soft">{partner.description}</p>
                ) : null}
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.66rem] font-bold uppercase text-terracotta"
                  >
                    Visitar site <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
