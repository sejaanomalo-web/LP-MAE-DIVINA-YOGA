import type { Metadata } from "next";
import { ArrowDownRight, Brain, MessageCircle, Mic2, UsersRound, Wind } from "lucide-react";
import Link from "next/link";
import { CorporatePortfolio } from "@/components/corporate/corporate-portfolio";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Empresas e NR1",
  description: "Palestras, vivências e ferramentas de bem-estar para empresas e equipes.",
};

export default function EmpresasPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Mãe Divina para empresas"
        title="Cuidado que trabalha junto."
        text="Palestras, práticas e experiências para apoiar equipes mais presentes, saudáveis e capazes de sustentar boas relações."
        image="/images/pratica-em-dupla.jpg"
        imageAlt="Prática de colaboração e confiança"
        position="center 42%"
      />

      <section id="nr1" className="bg-paper py-24 md:py-36">
        <div className="content-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Ferramentas para NR1"
              title="Conformidade começa na gestão. Cuidado começa nas pessoas."
              text="A Mãe Divina cria ações educativas e práticas que podem integrar programas internos de bem-estar e prevenção. O desenho parte do contexto real da equipe, sem fórmulas prontas."
            />
          </Reveal>
          <div className="mt-16 grid border-y border-ink/15 md:grid-cols-3">
            {[
              { icon: Brain, title: "Por quê", text: "Sobrecarga, estresse e relações frágeis afetam presença, saúde e capacidade de decisão." },
              { icon: Wind, title: "Como", text: "Respiração, movimento, educação e escuta transformam conceitos em experiências assimiláveis." },
              { icon: UsersRound, title: "De que forma", text: "Palestras, trilhas, encontros pontuais ou programas recorrentes ajustados à rotina da organização." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="border-b border-ink/15 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                <item.icon size={23} strokeWidth={1.4} className="text-terracotta" />
                <h3 className="mt-10 font-display text-4xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-xs leading-6 text-ink-soft">{item.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-[0.65rem] leading-5 text-ink/50">
            As ações de Yoga e bem-estar são complementares e não substituem inventário de riscos, avaliação técnica, acompanhamento clínico ou demais obrigações de Saúde e Segurança do Trabalho.
          </p>
        </div>
      </section>

      <section className="bg-terracotta py-24 text-white md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="eyebrow !text-gold">MIDI Funis</p>
            <p className="mt-8 text-xs leading-6 text-white/58">Uma arquitetura de ações que organiza diagnóstico, interesse, experiência e continuidade.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-title text-[3.5rem] text-[#fffaf5] sm:text-[5rem] lg:text-[7.5rem]">Da atenção despertada ao hábito sustentado.</h2>
            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/70">A proposta combina comunicação, encontros de entrada, experiências práticas e trilhas de continuidade. Assim, a ação deixa de ser um evento isolado e passa a criar repertório para a equipe.</p>
            <Link href="#portfolio" className="button-light mt-9">Cérebro a mais <ArrowDownRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section id="palestras" className="bg-sand py-24 md:py-36">
        <div className="content-shell">
          <Reveal>
            <SectionHeading eyebrow="Palestras" title="Ideias que o corpo consegue lembrar." text="Conteúdo claro, experiência guiada e ferramentas simples para continuar depois do encontro." />
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { icon: Mic2, title: "Respirar sob pressão", text: "Como reconhecer ativação, criar pausas e recuperar capacidade de resposta." },
              { icon: Brain, title: "Atenção não é infinita", text: "Foco, fadiga mental e escolhas possíveis em ambientes de alta demanda." },
              { icon: UsersRound, title: "Presença nas relações", text: "Escuta, limites e consciência para conversas mais humanas e produtivas." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="flex min-h-[330px] flex-col justify-between border border-ink/12 bg-[#fffaf5] p-7">
                <item.icon size={24} strokeWidth={1.4} className="text-terracotta" />
                <div>
                  <h3 className="font-display text-4xl font-semibold leading-[1.02]">{item.title}</h3>
                  <p className="mt-5 text-xs leading-6 text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-9 flex justify-end">
            <a href={whatsappUrl("Olá, Reinor! Quero conversar sobre uma palestra para minha empresa.")} target="_blank" rel="noreferrer" className="button-primary">Falar sobre palestras <MessageCircle size={16} /></a>
          </Reveal>
        </div>
      </section>

      <CorporatePortfolio />
    </main>
  );
}
