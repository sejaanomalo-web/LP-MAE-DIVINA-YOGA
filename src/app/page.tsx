import { AnamnesisSection } from "@/components/home/anamnesis-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HouseSection } from "@/components/home/house-section";
import { QuickAccessSection } from "@/components/home/quick-access-section";
import { PartnerBanner } from "@/components/partners/partner-banner";
import { PartnerFooterStrip } from "@/components/partners/partner-footer-strip";
import { PartnerLogoStrip } from "@/components/partners/partner-logo-strip";
import { partnerSections } from "@/data/partners";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroCarousel />
      <QuickAccessSection />
      {partnerSections.banner ? <PartnerBanner /> : null}
      <HouseSection />
      {partnerSections.logoStrip ? <PartnerLogoStrip /> : null}
      <AnamnesisSection />
      {partnerSections.footerStrip ? <PartnerFooterStrip /> : null}
    </main>
  );
}
