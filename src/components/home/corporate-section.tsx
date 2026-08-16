import { ArrowRight, Brain, MessageCircle, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/whatsapp";

export function CorporateSection() {
  return (
    <section className="bg-terracotta py-24 text-white md:py-36">
      <div className="content-shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="relative min-h-[500px] overflow-hidden md:min-h-[650px]">
          <Image
            src="/images/reinor-namaste.jpg"
            alt="Reinor em namastê durante uma prática guiada"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-[rgba(50,25,15,0.12)]" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[rgba(37,46,38,0.86)] p-6 backdrop-blur-sm">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase text-gold">Contato empresas</p>
              <p className="mt-1 font-display text-2xl">Projetos com Reinor</p>
            </div>
            <a
              href={whatsappUrl("Olá, Reinor! Quero conversar sobre as soluções da Mãe Divina para empresas.")}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf5] text-terracotta"
              aria-label="Falar com Reinor pelo WhatsApp"
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow !text-[#f0c97a]">Ferramentas para NR1</span>
            <h2 className="display-title mt-6 text-[3.4rem] sm:text-[4.6rem] lg:text-[6.5rem] text-[#fffaf5]">
              Bem-estar que se transforma em cultura.
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/72 md:text-base">
              Soluções corporativas que unem cuidado integral, educação e experiências práticas. Um apoio humano para organizações que desejam fortalecer ambientes mais conscientes e sustentáveis.
            </p>
          </Reveal>

          <div className="mt-12 border-y border-white/20">
            {[
              { icon: Brain, title: "Regulação e foco", text: "Respiração e atenção aplicadas à rotina de trabalho." },
              { icon: UsersRound, title: "Relações mais conscientes", text: "Vivências para presença, escuta e colaboração." },
              { icon: MessageCircle, title: "Conteúdo que vira prática", text: "Palestras, trilhas e ações desenhadas para cada equipe." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="flex gap-5 border-b border-white/15 py-7 last:border-b-0">
                <item.icon size={21} strokeWidth={1.5} className="mt-1 shrink-0 text-[#f0c97a]" />
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/58">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link href="/empresas" className="button-light">
              Conhecer soluções para empresas
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
