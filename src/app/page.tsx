import { AnamnesisSection } from "@/components/home/anamnesis-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HouseSection } from "@/components/home/house-section";
import { QuickAccessSection } from "@/components/home/quick-access-section";
import { PartnerBanner } from "@/components/partners/partner-banner";
import { partnerSections } from "@/data/partners";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroCarousel />
      <QuickAccessSection />
      <HouseSection />
      {partnerSections.banner ? <PartnerBanner /> : null}
      <AnamnesisSection />
    </main>
  );
}
