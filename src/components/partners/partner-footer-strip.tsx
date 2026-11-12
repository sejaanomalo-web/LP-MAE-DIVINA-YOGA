import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PartnerLink, PartnerLogo } from "@/components/partners/partner-logo";
import { partners } from "@/data/partners";

const VISIBLE = 3;

/** Formato 03: seção compacta antes do rodapé, com acesso à página /parceiros. */
export function PartnerFooterStrip() {
  return (
    <section aria-labelledby="parceiros-rodape-title" className="bg-paper py-12 md:py-14">
      <div className="content-shell grid gap-7 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
        <div>
          <h2 id="parceiros-rodape-title" className="font-display text-[1.9rem] font-semibold leading-tight text-ink md:text-[2.2rem]">
            Parceiros da nossa casa
          </h2>
          <Link
            href="/parceiros"
            className="mt-3 inline-flex items-center gap-2 text-[0.66rem] font-bold uppercase text-terracotta underline-offset-4 hover:underline"
          >
            Conhecer todos os parceiros <ArrowUpRight size={14} />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {partners.slice(0, VISIBLE).map((partner, index) => (
            <li key={partner.id} className={index === VISIBLE - 1 ? "col-span-2 sm:col-span-1" : undefined}>
              <PartnerLink partner={partner} className="block">
                <PartnerLogo partner={partner} size="sm" />
              </PartnerLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
