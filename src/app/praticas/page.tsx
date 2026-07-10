import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hatha Yoga e Nossas Práticas",
  description: "História do Yoga, caminho, asanas e benefícios das práticas da Mãe Divina Yôga.",
};

const benefits = [
  "Mais mobilidade, força e consciência corporal",
  "Alívio de tensões e melhor relação com o estresse",
  "Qualidade do sono e capacidade de desacelerar",
  "Equilíbrio, postura e propriocepção",
  "Foco, clareza e presença na vida cotidiana",
  "Um espaço regular de autocuidado e escuta",
];

export default function PraticasPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Hatha Yoga"
        title="Prática é caminho."
        text="Uma tradição viva que integra corpo, respiração, atenção e presença, respeitando todos os corpos e momentos de vida."
        image="/images/aula-hatha.jpg"
        imageAlt="Aula de Hatha Yoga na Mãe Divina"
        position="center 55%"
      />

      <section id="historia" className="bg-paper py-24 md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <span className="eyebrow">01 · História</span>
            <p className="mt-8 font-display text-4xl leading-[1.08] text-terracotta md:text-5xl">Uma tradição antiga, uma experiência sempre presente.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-title text-[3.3rem] sm:text-[4.8rem] lg:text-[7rem]">O Yoga atravessa séculos porque continua fazendo sentido no corpo.</h2>
            <div className="mt-9 grid gap-7 text-sm leading-8 text-ink-soft md:grid-cols-2">
              <p>O Yoga se desenvolveu na Índia como um conjunto amplo de caminhos de investigação da consciência. Filosofia, ética, meditação, respiração e disciplina corporal foram se encontrando em diferentes escolas e períodos.</p>
              <p>O Hatha Yoga dá atenção especial ao corpo e à energia como meios de transformação. Na Mãe Divina, essa tradição é oferecida com linguagem acessível, adaptações e cuidado com a singularidade de cada aluno.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="caminho" className="bg-terracotta py-24 text-white md:py-36">
        <div className="content-shell">
          <Reveal className="max-w-4xl">
            <span className="eyebrow !text-gold">02 · Caminho</span>
            <h2 className="display-title mt-6 text-[3.5rem] text-[#fffaf5] sm:text-[5rem] lg:text-[7.5rem]">Muito além da flexibilidade.</h2>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/72">O tapete é um laboratório: percebemos hábitos, treinamos presença e aprendemos a responder com mais consciência. O que se pratica ali começa a aparecer na forma de respirar, escolher, pausar e se relacionar.</p>
          </Reveal>
          <div className="mt-16 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Asana", "Habitar o corpo"],
              ["Pranayama", "Refinar a respiração"],
              ["Dhyana", "Cultivar atenção"],
              ["Integração", "Levar a prática à vida"],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08} className="border-b border-white/15 py-8 sm:border-r sm:px-7 lg:border-b-0 lg:last:border-r-0">
                <span className="text-[0.6rem] text-white/38">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-2 text-xs text-white/55">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="asanas" className="bg-sand py-24 md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative min-h-[520px] overflow-hidden md:min-h-[700px]">
            <Image src="/images/pratica-em-dupla.jpg" alt="Asana de equilíbrio em dupla" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-[55%_center]" />
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow">03 · Asanas</span>
            <h2 className="display-title mt-6 text-[3.3rem] sm:text-[4.6rem] lg:text-[6.5rem]">Firmeza sem rigidez. Suavidade sem ausência.</h2>
            <p className="body-copy mt-8">As posturas são propostas com permanência e fluidez, sempre integradas à respiração. Variações, apoios e pausas fazem parte da prática. O objetivo não é reproduzir uma forma perfeita, mas perceber com mais qualidade o corpo real que está ali.</p>
            <Link href="/#aula-gratis" className="button-primary mt-9">Experimentar uma aula <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section id="beneficios" className="bg-forest py-24 text-white md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow !text-gold">04 · Benefícios</span>
            <h2 className="display-title mt-6 text-[3.4rem] text-[#fffaf5] sm:text-[4.6rem] lg:text-[6.5rem]">Mudanças que se percebem por dentro e por fora.</h2>
            <p className="mt-7 text-xs leading-6 text-white/58">Os efeitos variam para cada pessoa e dependem da regularidade, do momento de vida e das necessidades individuais.</p>
          </Reveal>
          <div className="border-t border-white/20">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 0.05} className="flex items-center gap-5 border-b border-white/15 py-6">
                <Check size={17} className="shrink-0 text-gold" />
                <p className="font-display text-2xl font-medium text-[#fffaf5] md:text-3xl">{benefit}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Reveal className="content-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-display text-4xl font-medium leading-[1.05] md:text-5xl">A prática começa com uma respiração e uma decisão.</p>
          <a href={whatsappUrl("Olá! Quero encontrar a melhor turma de Hatha Yoga para mim.")} target="_blank" rel="noreferrer" className="button-primary shrink-0">Encontrar minha turma <MessageCircle size={16} /></a>
        </Reveal>
      </section>
    </main>
  );
}
