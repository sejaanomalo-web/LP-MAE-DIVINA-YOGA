import { ArrowRight, CircleDot, Feather, Move, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const practiceElements = [
  { icon: Move, title: "Asanas", text: "Posturas com permanência, fluidez e adaptação." },
  { icon: Wind, title: "Pranayamas", text: "Respiração para foco, energia e regulação." },
  { icon: CircleDot, title: "Meditação", text: "Atenção treinada com leveza e continuidade." },
  { icon: Feather, title: "Relaxamento", text: "Integração para o corpo absorver a prática." },
];

export function PracticeSection() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <div className="content-shell">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative min-h-[510px] overflow-hidden md:min-h-[680px]">
            <Image
              src="/images/aula-hatha.jpg"
              alt="Alunos em uma prática guiada de Hatha Yoga"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-[55%_center]"
            />
            <div className="absolute bottom-0 right-0 w-44 bg-paper p-5 md:w-56 md:p-7">
              <p className="font-display text-4xl font-medium text-terracotta">Hatha</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase text-ink-soft">força e suavidade</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Nossas práticas"
                title="O corpo não é um obstáculo. É o caminho."
                text="A essência do Yoga clássico com um olhar inclusivo e acolhedor. Alinhamento, fortalecimento, respiração e atenção, sempre respeitando a anatomia e a história de cada pessoa."
              />
            </Reveal>

            <div className="mt-11 grid gap-0 border-y border-ink/15 sm:grid-cols-2">
              {practiceElements.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.07}
                  className={`flex gap-4 border-b border-ink/15 py-6 last:border-b-0 sm:px-5 ${
                    index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"
                  } ${index >= 2 ? "sm:border-b-0" : ""}`}
                >
                  <item.icon size={19} strokeWidth={1.5} className="mt-1 shrink-0 text-terracotta" />
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-ink-soft">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <Link href="/praticas" className="button-primary">
                História, caminho e benefícios
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
