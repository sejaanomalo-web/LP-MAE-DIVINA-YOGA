import type { Metadata } from "next";
import {
  ArrowUpRight,
  HeartPulse,
  HandHeart,
  Sparkles,
} from "lucide-react";
import { OmIcon } from "@/components/icons/om-icon";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Meditação e Cuidado",
  description: "Meditação, OM Chanting, Yogaterapia e Reiki na Mãe Divina Yôga.",
};

const paths = [
  {
    id: "oficina-de-meditacao",
    icon: Sparkles,
    number: "01",
    title: "Oficina de Meditação",
    text: "É um encontro em que aprofundamos os ensinamentos sobre diferentes técnicas de meditar: passiva guiada, dinâmica (Osho), silenciosa (Zazen) e Japa Mala (Mantra Yoga). As práticas são individuais ou coletivas e trabalham diferentes aspectos da atenção plena (Mindfulness), para quem deseja começar ou se aprofundar nesse caminho.",
  },
  {
    id: "omc",
    icon: OmIcon,
    number: "02",
    title: "OM Chanting",
    text: "Segundo a tradição hindu, o OM é a vibração primordial, a base de todos os sons e a fonte de toda criação. OM Chanting é uma técnica que utiliza o mantra, a qual atravessou milênios e foi divulgada pelo mestre Swami Vishwananda para o mundo. Ela promove cura física, mental e espiritual para seus praticantes.",
  },
  {
    id: "yogaterapia",
    icon: HeartPulse,
    number: "03",
    title: "Yogaterapia",
    text: "O Yoga aplicado de forma individualizada para apoiar o cuidado com dores, tensões e desequilíbrios do corpo e da mente.",
  },
  {
    id: "reiki",
    icon: HandHeart,
    number: "04",
    title: "Reiki",
    text: 'O Reiki é uma técnica terapêutica de imposição das mãos criada no Japão em 1922 pelo monge Mikao Usui. A palavra é formada pela união de dois termos japoneses: Rei (que significa "universal", a energia cósmica) e Ki (a "energia vital" que flui em todos os seres vivos).',
  },
];

export default function MeditacoesPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Meditação e Cuidado"
        title="Presença que se cultiva."
        text="Meditação, estudo, serviço e comunidade como caminhos para aprofundar a prática além do tapete."
        image="/images/reinor-meditacao-eventos.jpg"
        imageAlt="Reinor meditando com alunos na sala de prática"
        position="center 22%"
      />
      <section className="bg-paper py-24 md:py-36">
        <div className="content-shell">
          <Reveal className="mb-16 flex flex-col gap-5 border-b border-ink/15 pb-10 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-3xl font-medium text-ink md:text-4xl">Conheça o OM Chanting</p>
            <a
              href="https://www.youtube.com/watch?v=n8xeOCrf5KE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase text-terracotta"
            >
              Assistir ao vídeo <ArrowUpRight size={16} />
            </a>
          </Reveal>
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
