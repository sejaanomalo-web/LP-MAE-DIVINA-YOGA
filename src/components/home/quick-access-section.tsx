import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  {
    label: "Aulas",
    title: "Hatha Yoga",
    text: "Conheça as práticas, benefícios e caminhos para começar.",
    href: "/praticas",
    image: "/images/aula-hatha.jpg",
    className: "md:col-span-2 lg:row-span-2",
  },
  {
    label: "Agenda",
    title: "Eventos",
    text: "Encontros, oficinas e retiros da Mãe Divina.",
    href: "/eventos",
    image: "/images/pratica-em-dupla.jpg",
    className: "",
  },
  {
    label: "Presença",
    title: "Meditações",
    text: "Oficinas, estudos e práticas de aprofundamento.",
    href: "/meditacoes",
    image: "/images/casa-altar.jpg",
    className: "",
  },
  {
    label: "NR1 e bem-estar",
    title: "Para empresas",
    text: "Palestras e experiências para equipes mais conscientes.",
    href: "/empresas",
    image: "/images/reinor-namaste.jpg",
    className: "",
  },
  {
    label: "Curadoria",
    title: "Lojinha",
    text: "Objetos com intenção para acompanhar a prática.",
    href: "/loja",
    image: "/images/visao-altar.jpg",
    className: "",
  },
] as const;

export function QuickAccessSection() {
  return (
    <section aria-labelledby="acessos-title" className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <Reveal className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Encontre seu caminho</p>
            <h2 id="acessos-title" className="display-title mt-5 max-w-4xl text-[3.4rem] sm:text-[4.8rem] lg:text-[6.5rem]">
              Vá direto ao que chama você.
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-6 text-ink-soft md:text-right">
            Aulas, encontros, meditação, soluções para empresas e itens para a sua prática. Tudo a poucos passos.
          </p>
        </Reveal>

        <div className="mt-8 grid auto-rows-[290px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.05} className={item.className}>
              <Link
                href={item.href}
                className="group relative flex h-full min-h-[290px] overflow-hidden bg-forest text-white"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,30,24,0.12)_0%,rgba(20,30,24,0.68)_48%,rgba(20,30,24,0.94)_100%)]" />
                <div className="relative mt-auto flex w-full items-end justify-between gap-5 p-6 md:p-7">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#f3d17a]">{item.label}</p>
                    <h3 className="mt-2 font-display text-4xl font-semibold text-[#fffaf5]">{item.title}</h3>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-white/68">{item.text}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 transition-colors group-hover:bg-white group-hover:text-forest">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
