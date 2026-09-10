import type { Metadata } from "next";
import { ArrowRight, Heart, Leaf, Lightbulb, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Nossa Casa",
  description: "Conheça a história, as pessoas e os valores que sustentam a Mãe Divina Yôga em Cascavel.",
};

export default function NossaCasaPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Nossa Casa"
        title="Um lugar para pertencer."
        text="Acolhimento, espiritualidade e presença em uma casa que entende o Yoga como caminho de consciência e cuidado."
        image="/images/casa-luz.jpg"
        imageAlt="Sala de práticas iluminada da Mãe Divina Yôga"
        position="center 54%"
      />

      <section id="historia" className="bg-paper py-24 md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow">Nossa história</p>
            <p className="mt-8 font-display text-4xl leading-[1.08] text-terracotta md:text-5xl">Oito anos de práticas, encontros e travessias.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-title text-[3.2rem] sm:text-[4.6rem] lg:text-[6.8rem]">Uma casa não nasce pronta. Ela é cuidada.</h2>
            <div className="mt-9 grid gap-7 text-sm leading-8 text-ink-soft md:grid-cols-2">
              <p>
                A Mãe Divina nasceu do desejo de criar um espaço seguro de reconexão com o corpo, a respiração e o sagrado. Ao longo dos anos, cada aula, estudo e vivência ajudou a formar uma comunidade feita de presença e pertencimento.
              </p>
              <p>
                Hoje, a casa segue viva e em movimento. O Hatha Yoga é a base, mas o cuidado atravessa meditação, cultura indiana, encontros temáticos e experiências que convidam cada pessoa a voltar para a própria essência.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quem-somos" className="bg-sand py-24 md:py-36">
        <div className="content-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Quem somos"
              title="Pessoas que sustentam a presença."
              text="A Mãe Divina é construída por diferentes trajetórias. Esta primeira versão reserva o espaço editorial de cada pessoa para que biografias, formações e histórias sejam validadas antes da publicação definitiva."
            />
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <Reveal className="overflow-hidden border border-ink/12 bg-[#fffaf5]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/carol-retrato.jpg" alt="Carol" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[center_35%]" />
              </div>
              <div className="p-6">
                <p className="font-display text-4xl font-semibold">Carol</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Conduz práticas com leveza, atenção e profundidade, criando um encontro respeitoso com cada corpo.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08} id="cadu" className="scroll-mt-28">
              <PhotoPlaceholder
                label="Cadu"
                brief="Retrato vertical 4:5, luz natural, olhar direto e ambiente ligado à casa. Biografia e formação aguardam validação editorial."
                className="h-full min-h-[560px]"
              />
            </Reveal>
            <Reveal delay={0.16} id="reinor" className="scroll-mt-28 overflow-hidden border border-ink/12 bg-[#fffaf5]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/reinor-namaste.jpg" alt="Reinor" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[center_22%]" />
              </div>
              <div className="p-6">
                <p className="font-display text-4xl font-semibold">Reinor</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Conduz as pontes da casa com empresas e projetos, unindo prática, escuta e cultura de bem-estar.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="valores" className="bg-forest py-24 text-white md:py-36">
        <div className="content-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Missão, visão e valores"
              title="Aquilo que não muda quando tudo se move."
              text="Princípios simples e profundos orientam cada aula, escolha e relação construída dentro da casa."
              light
            />
          </Reveal>

          <div className="mt-16 grid border-y border-white/15 md:grid-cols-3">
            {[
              { icon: Heart, number: "01", title: "Missão", text: "Acolher e cuidar do ser por inteiro por meio do Yoga, da meditação e de vivências conscientes." },
              { icon: Lightbulb, number: "02", title: "Visão", text: "Cultivar uma comunidade capaz de viver com mais presença, autonomia, consciência e respeito." },
              { icon: Leaf, number: "03", title: "Valores", text: "Escuta, pertencimento, verdade, cuidado, tradição, inclusão e responsabilidade em cada encontro." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="border-b border-white/15 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <item.icon size={23} strokeWidth={1.4} className="text-gold" />
                  <span className="text-[0.6rem] text-white/35">{item.number}</span>
                </div>
                <h3 className="mt-12 font-display text-4xl font-semibold text-[#fffaf5]">{item.title}</h3>
                <p className="mt-5 text-xs leading-6 text-white/58">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-paper py-20 md:py-28">
        <Reveal className="content-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-display text-4xl font-medium leading-[1.05] md:text-5xl">Toda história muda quando você entra nela.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/praticas" className="button-primary">Conhecer as práticas <ArrowRight size={16} /></Link>
            <a href={whatsappUrl("Olá! Quero conhecer a Mãe Divina Yôga.")} target="_blank" rel="noreferrer" className="button-primary !bg-forest">Falar com a casa <MessageCircle size={16} /></a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
