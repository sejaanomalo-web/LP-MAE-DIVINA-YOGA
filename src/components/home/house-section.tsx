import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  {
    icon: Heart,
    title: "Acolhimento",
    text: "Escuta sem julgamento e respeito pela história que cada pessoa traz.",
  },
  {
    icon: Leaf,
    title: "Presença",
    text: "Menos pressa, mais percepção. A prática começa exatamente onde você está.",
  },
  {
    icon: Sparkles,
    title: "Consciência",
    text: "Corpo, mente e emoções vistos como partes de uma experiência inteira.",
  },
];

export function HouseSection() {
  return (
    <section id="nossa-casa" className="bg-paper py-24 md:py-36">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Nossa Casa"
            title="O cuidado também pode ter endereço."
            text="Há oito anos, a Mãe Divina constrói em Cascavel um espaço seguro de reconexão com o corpo, a respiração e o divino. Uma casa que acolhe o universo feminino e abraça todos os que desejam viver com mais consciência."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <Reveal className="relative min-h-[470px] overflow-hidden md:min-h-[620px]">
            <Image
              src="/images/carol-retrato.jpg"
              alt="Carol, professora da Mãe Divina Yôga"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_38%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[rgba(25,36,29,0.8)] p-6 text-white backdrop-blur-sm">
              <p className="font-display text-3xl font-medium">Carol</p>
              <p className="mt-1 text-xs leading-5 text-white/68">Leveza, técnica e presença em cada condução.</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-rows-2">
            <Reveal delay={0.08} className="relative min-h-[310px] overflow-hidden sm:col-span-2">
              <Image
                src="/images/casa-luz.jpg"
                alt="Sala de práticas da Mãe Divina Yôga"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[rgba(34,43,36,0.22)]" />
              <p className="absolute bottom-6 left-6 max-w-sm font-display text-3xl leading-8 text-white md:text-4xl">
                Um ambiente pensado para você baixar a guarda.
              </p>
            </Reveal>
            <Reveal delay={0.14} className="flex min-h-[280px] flex-col justify-between bg-terracotta p-7 text-white md:p-9">
              <span className="text-[0.65rem] font-semibold uppercase text-white/58">Missão</span>
              <p className="font-display text-[2rem] leading-[1.05] md:text-[2.5rem]">
                Cuidar do ser por inteiro, com profundidade e gentileza.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="flex min-h-[280px] flex-col justify-between border border-terracotta/25 bg-sand p-7 md:p-9">
              <span className="text-[0.65rem] font-semibold uppercase text-terracotta">Visão</span>
              <p className="font-display text-[2rem] leading-[1.05] text-ink md:text-[2.5rem]">
                Uma comunidade mais presente, consciente e humana.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid border-y border-ink/15 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.08}
              className="flex gap-5 border-b border-ink/15 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"
            >
              <value.icon size={21} strokeWidth={1.5} className="mt-1 shrink-0 text-terracotta" />
              <div>
                <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-end">
          <Link href="/nossa-casa" className="button-primary">
            Entrar na nossa história
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
