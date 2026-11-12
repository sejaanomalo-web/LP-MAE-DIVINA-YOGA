import type { Metadata } from "next";
import {
  ArrowUpRight,
  Flame,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { OmIcon } from "@/components/icons/om-icon";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Meditações",
  description: "Meditação, OM Chanting, Yogaterapia, Kriya Yoga e encontros gratuitos da Mãe Divina Yôga.",
};

const paths = [
  {
    id: "oficina-de-meditacao",
    icon: Sparkles,
    number: "01",
    title: "Oficina de Meditação",
    text: "Fundamentos, técnicas guiadas e continuidade para quem deseja começar ou aprofundar uma prática possível no cotidiano.",
  },
  {
    id: "omc",
    icon: OmIcon,
    number: "02",
    title: "OM Chanting",
    text: "Um espaço de prática e investigação contínua. A descrição completa, periodicidade e critérios de participação serão validados com a equipe.",
  },
  {
    id: "yogaterapia",
    icon: HeartPulse,
    number: "03",
    title: "Yogaterapia",
    text: "O Yoga aplicado de forma individualizada para apoiar o cuidado com dores, tensões e desequilíbrios do corpo e da mente.",
  },
  {
    id: "kriya-yoga",
    icon: Flame,
    number: "04",
    title: "Kriya Yoga",
    text: "Técnicas de respiração, concentração e meditação da tradição do Kriya para aprofundar a prática interior.",
  },
];

export default function MeditacoesPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Meditações"
        title="Presença que se cultiva."
        text="Meditação, estudo, serviço e comunidade como caminhos para aprofundar a prática além do tapete."
        image="/images/reinor-meditacao-eventos.jpg"
        imageAlt="Reinor meditando com alunos na sala de prática"
        position="center 22%"
      />
      <section className="bg-paper py-24 md:py-36">
        <div className="content-shell">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Caminhos de aprofundamento</p>
            <h2 className="display-title mt-6 text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">
              Silenciar também é uma forma de escutar.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {paths.map((path, index) => (
              <Reveal
                key={path.id}
                delay={(index % 2) * 0.08}
                id={path.id}
                className="flex min-h-[330px] scroll-mt-28 flex-col justify-between border border-ink/12 bg-[#fffaf5] p-7 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <path.icon size={24} strokeWidth={1.4} className="text-terracotta" />
                  <span className="text-[0.6rem] text-ink/35">{path.number}</span>
                </div>
                <div className="mt-12">
                  <h2 className="font-display text-4xl font-semibold md:text-5xl">{path.title}</h2>
                  <p className="mt-5 text-xs leading-6 text-ink-soft">{path.text}</p>
                  <a
                    href={whatsappUrl(`Olá! Quero saber mais sobre ${path.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta"
                  >
                    Saiba mais <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
