import type { Metadata } from "next";
import { ArrowRight, Heart, Leaf, Lightbulb, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteVideoSection } from "@/components/ui/site-video";
import { nossaCasaVideo } from "@/data/media";
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

      <SiteVideoSection video={nossaCasaVideo} />

      <section id="historia" className="bg-paper py-24 md:py-36">
        <div className="content-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow">Nossa história</p>
            <p className="mt-8 font-display text-4xl leading-[1.08] text-terracotta md:text-5xl">Nove anos de práticas, encontros e travessias.</p>
            <div className="relative mt-10 aspect-[9/16] w-full max-w-sm overflow-hidden">
              <Image
                src="/images/entrada-mae-divina.jpg"
                alt="Porta de entrada da Mãe Divina Yôga, com o símbolo da casa e plantas"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-title text-[3.2rem] sm:text-[4.6rem] lg:text-[6.8rem]">Uma casa não nasce pronta. Ela é cuidada.</h2>
            <div className="mt-9 grid gap-7 text-[0.9625rem] leading-8 text-ink-soft md:grid-cols-2">
              <p>
                A Mãe Divina nasceu do desejo de criar um espaço seguro de reconexão com o corpo, a respiração e o sagrado. Ao longo dos anos, cada aula, estudo e vivência ajudou a formar uma comunidade feita de presença e pertencimento.
              </p>
              <p>
                Hoje, a casa segue viva e em movimento. O Hatha Yoga é a base, mas o cuidado integra meditação, cultura indiana, encontros temáticos e experiências que convidam cada pessoa a voltar para a própria essência.
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
            <Reveal id="carol" className="scroll-mt-28 overflow-hidden border border-ink/12 bg-[#fffaf5]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/carol-meditacao.jpg" alt="Carol meditando em namastê sobre o tapete, ao ar livre" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[center_30%]" />
              </div>
              <div className="p-6">
                <p className="font-display text-4xl font-semibold">Carol Reis</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">A jornada de Carol Reis no universo do yoga começou há cerca de 20 anos, através do Bhakti Yoga, caminho devocional que despertou seu olhar sensível para a espiritualidade e o autoconhecimento. Desde 2020, dedica-se ao ensino como instrutora de Hatha Yoga, aliando a sabedoria milenar à ciência do movimento. Possui formação acadêmica em Educação Física (Bacharelado e Licenciatura), o que garante uma condução técnica, segura e embasada.</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Em busca de uma visão integral do ser humano, aprofundou seus estudos com iniciações em Reiki (níveis 1 e 2) e Atma Kriya Yoga, além de acumular ricas vivências em linhas como Ashtanga Yoga, Kundalini Yoga, Yogaterapia e Sagrado Feminino. Em suas aulas, prioriza o movimento consciente, integrando alongamentos, fortalecimento e práticas que ampliam a percepção corporal. Com uma escuta atenta e acolhedora, guia cada praticante na harmonização entre corpo, mente e respiração, sempre respeitando o ritmo, a história e as possibilidades individuais de cada aluno.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08} id="reinor" className="scroll-mt-28 overflow-hidden border border-ink/12 bg-[#fffaf5]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/reinor-namaste.jpg" alt="Reinor" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[center_22%]" />
              </div>
              <div className="p-6">
                <p className="font-display text-4xl font-semibold">Reinor</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Com formação em Hatha Yoga desde 2020, Atma Kriya Yoga, Reiki nível 3, Yogaterapia, iniciação em Ashtanga e vivências diversas desde 1997, quando conheceu o Bhakti Yoga e o Kundalini. Hoje ministra aulas e eventos específicos de meditação e autoconhecimento.</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Une o conhecimento da formação em Técnico em Segurança do Trabalho e saúde mental para oferecer palestras e dinâmicas às empresas, com planos de ação especializados no atendimento à NR-1, saúde mental e riscos psicossociais.</p>
              </div>
            </Reveal>
            <Reveal delay={0.16} id="duda" className="scroll-mt-28 overflow-hidden border border-ink/12 bg-[#fffaf5]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/duda-retrato.jpg" alt="Duda" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[center_20%]" />
              </div>
              <div className="p-6">
                <p className="font-display text-4xl font-semibold">Duda</p>
                <p className="mt-3 text-xs leading-6 text-ink-soft">Eduarda Silva, fundadora do Mãe Divina Yoga Cascavel. Pela inspiração da energia feminina, conduziu com muito amor aulas e retiros às alunas até 2025. Hoje conduz encontros durante o ano em momentos especiais!</p>
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
                <p className="mt-5 text-[0.9rem] leading-7 text-white/58">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="vantagens" className="scroll-mt-20 bg-paper-warm py-20 md:py-28">
        <div className="content-shell">
          <Reveal>
            <p className="eyebrow">Para quem faz parte</p>
            <h2 className="display-title mt-5 text-[3.2rem] sm:text-[4.6rem] lg:text-[5.8rem]">Vantagens em fazer parte</h2>
          </Reveal>
          <div className="mt-12 grid border-t border-ink/15 md:grid-cols-2">
            {[
              "Eventos gratuitos mensais",
              "Desconto em empresas parceiras",
              "Presença premiada",
              "Aulas grátis em dias especiais: Dia dos Pais, Dia das Mães e Dia dos Namorados",
              "Mimos de aniversário",
              "50% de desconto em eventos pagos",
              "Aplicação de Reiki nas aulas",
              "Uso de óleos essenciais nas práticas",
            ].map((benefit, index) => (
              <Reveal key={benefit} delay={(index % 2) * 0.08} className="flex gap-5 border-b border-ink/15 py-6 md:pr-8">
                <span className="min-w-7 text-[0.7rem] font-semibold text-terracotta">
                  {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][index]}
                </span>
                <p className="text-sm leading-7 text-ink-soft">{benefit}</p>
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
