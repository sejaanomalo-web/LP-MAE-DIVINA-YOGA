"use client";

import { QRCodeSVG } from "qrcode.react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { whatsappUrl } from "@/lib/whatsapp";

const portfolio = [
  {
    id: "respiracao-consciente",
    number: "01",
    title: "Respiração consciente",
    text: "Ferramentas simples para reconhecer sinais de tensão, recuperar foco e criar pausas possíveis durante o expediente.",
    image: "/images/aula-hatha.jpg",
    position: "center 55%",
  },
  {
    id: "niyamas",
    number: "02",
    title: "Niyamas",
    text: "Princípios de autocuidado, disciplina e presença traduzidos para relações e escolhas no ambiente de trabalho.",
    image: "/images/casa-altar.jpg",
    position: "center",
  },
  {
    id: "tae",
    number: "03",
    title: "T.A.E.",
    text: "Uma experiência breve de atenção, escuta e consciência emocional para equipes que vivem sob alta demanda.",
    image: "/images/carol-retrato.jpg",
    position: "center 35%",
  },
  {
    id: "roda-da-vida",
    number: "04",
    title: "Roda da Vida",
    text: "Leitura visual de prioridades para reconhecer desequilíbrios e transformar percepção em próximos passos realistas.",
    image: "/images/pratica-em-dupla.jpg",
    position: "center 42%",
  },
  {
    id: "laborais",
    number: "05",
    title: "Laborais com Yoga",
    text: "Movimentos acessíveis, respiração e relaxamento para prevenir sobrecarga e devolver mobilidade ao corpo ao longo do dia.",
    image: "/images/aula-hatha.jpg",
    position: "center 65%",
  },
];

const proposalUrl = whatsappUrl("Olá, Reynor! Quero receber uma proposta de ações da Mãe Divina para minha empresa.");

export function CorporatePortfolio() {
  return (
    <section id="portfolio" className="bg-paper py-24 md:py-36">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-end">
          <div>
            <span className="eyebrow">Portfólio estático</span>
            <h2 className="display-title mt-5 text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">Ferramentas que cabem na vida real.</h2>
          </div>
          <div className="border border-ink/12 bg-[#fffaf5] p-5">
            <QRCodeSVG value={proposalUrl} size={138} fgColor="#24372d" bgColor="#fffaf5" className="mx-auto" />
            <p className="mt-4 text-center text-[0.62rem] font-semibold uppercase text-terracotta">Escaneie para falar com Reynor</p>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          {portfolio.map((item, index) => (
            <article key={item.id} id={item.id} className="grid scroll-mt-28 overflow-hidden border border-ink/12 bg-[#fffaf5] md:grid-cols-[0.8fr_1.2fr]">
              <div className={`relative min-h-[330px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 44vw" className="object-cover" style={{ objectPosition: item.position }} />
              </div>
              <div className="flex min-h-[330px] flex-col justify-between p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] font-semibold uppercase text-terracotta">Ferramenta</span>
                  <span className="text-[0.6rem] text-ink/35">{item.number}</span>
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-[2.8rem] font-medium leading-[0.95] sm:text-[3.6rem] lg:text-[5rem]">{item.title}</h3>
                  <p className="mt-6 max-w-xl text-xs leading-6 text-ink-soft">{item.text}</p>
                  <a href={whatsappUrl(`Olá! Quero aprofundar a solução “${item.title}” para minha empresa.`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta">
                    Saiba mais <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="contato-empresas" className="mt-16 flex flex-col gap-8 bg-forest p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase text-gold">Próximo passo</p>
            <p className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.05] text-[#fffaf5] md:text-5xl">Conte o contexto. A proposta nasce depois da escuta.</p>
          </div>
          <a href={proposalUrl} target="_blank" rel="noreferrer" className="button-light shrink-0">Solicitar proposta <MessageCircle size={16} /></a>
        </div>
      </div>
    </section>
  );
}
