import { AnamnesisSection } from "@/components/home/anamnesis-section";
import { CorporateSection } from "@/components/home/corporate-section";
import { EventsPreview } from "@/components/home/events-preview";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { HouseSection } from "@/components/home/house-section";
import { PracticeSection } from "@/components/home/practice-section";
import { ShopShowcase } from "@/components/home/shop-showcase";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <main id="conteudo">
      <HeroCarousel />
      <HouseSection />
      <AnamnesisSection />
      <PracticeSection />
      <EventsPreview />
      <CorporateSection />
      <ShopShowcase />
      <TestimonialsSection />
    </main>
  );
}
