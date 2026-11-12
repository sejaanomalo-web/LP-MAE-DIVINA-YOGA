import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PartnerLink, PartnerLogo } from "@/components/partners/partner-logo";
import { Reveal } from "@/components/ui/reveal";
import { partners } from "@/data/partners";

/** Banner institucional de parceiros (home, após "Nossa Casa"). */
export function PartnerBanner() {
  return (
    <section aria-labelledby="parceiros-banner-title" className="bg-paper pb-20 pt-0 md:pb-32">
      <div className="content-shell">
        <Reveal className="grid gap-8 rounded-[18px] border border-ink/10 bg-sand/55 p-6 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <span className="eyebrow">Parceiros</span>
            <h2 id="parceiros-banner-title" className="display-title mt-4 text-[2.3rem] sm:text-[3rem] lg:text-[3.8rem]">
              Conexões que fazem parte da nossa história
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
              Conheça as empresas que caminham junto com a Mãe Divina.
            </p>
            <Link
              href="/parceiros"
              className="mt-6 inline-block text-[0.68rem] font-bold uppercase text-terracotta underline-offset-4 hover:underline"
            >
              Conhecer nossos parceiros<ArrowUpRight size={14} className="ml-2 inline-block align-[-2px]" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:gap-4">
            {partners.map((partner) => (
              <li key={partner.id}>
                <PartnerLink partner={partner} className="block">
                  <PartnerLogo partner={partner} />
                </PartnerLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
