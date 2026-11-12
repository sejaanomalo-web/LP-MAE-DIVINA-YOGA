import { PartnerLink, PartnerLogo } from "@/components/partners/partner-logo";
import { Reveal } from "@/components/ui/reveal";
import { partners } from "@/data/partners";

/** Formato 01: faixa discreta de logotipos (home, após "Nossa Casa"). */
export function PartnerLogoStrip() {
  return (
    <section aria-labelledby="parceiros-faixa-title" className="border-y border-ink/10 bg-paper-warm py-14 md:py-20">
      <div className="content-shell">
        <Reveal className="flex flex-col items-center text-center">
          <h2 id="parceiros-faixa-title" className="display-title text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]">
            Quem caminha com a gente
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink-soft">
            Empresas parceiras que fazem parte da nossa história.
          </p>
        </Reveal>
        <ul className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-5">
          {partners.map((partner) => (
            <li key={partner.id}>
              <PartnerLink partner={partner} className="block">
                <PartnerLogo partner={partner} />
              </PartnerLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
