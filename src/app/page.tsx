import { AnamnesisSection } from "@/components/home/anamnesis-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HouseSection } from "@/components/home/house-section";
import { QuickAccessSection } from "@/components/home/quick-access-section";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroCarousel />
      <QuickAccessSection />
      <HouseSection />
      <AnamnesisSection />
    </main>
  );
}
