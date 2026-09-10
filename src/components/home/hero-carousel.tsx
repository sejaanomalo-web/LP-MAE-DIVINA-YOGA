"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";

const AUTOPLAY_DELAY = 3000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[active];

  return (
    <section
      className="relative h-[calc(100svh-28px)] min-h-[640px] max-h-[900px] overflow-hidden bg-forest"
      aria-roledescription="carrossel"
      aria-label="Destaques da Mãe Divina Yôga"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {slide.fit === "contain" ? (
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              className="scale-110 object-cover opacity-25 blur-xl"
              aria-hidden="true"
            />
          ) : null}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={active === 0}
            sizes="100vw"
            className={slide.fit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: isMobile ? slide.positionMobile : slide.position }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[rgba(15,25,20,0.56)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[rgba(14,23,18,0.2)]" />

      <div className="site-shell relative flex h-full items-end pb-24 pt-36 md:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-copy`}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[900px]"
          >
            <p className="eyebrow !text-[#efc66d]">{slide.eyebrow}</p>
            <h1 className="display-title mt-6 max-w-5xl text-[4.5rem] sm:text-[6.5rem] lg:text-[10rem] text-[#fffaf5]">
              {slide.title}
            </h1>
            <div className="mt-7 flex max-w-3xl flex-col gap-7 border-l border-white/35 pl-5 sm:pl-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm leading-7 text-white/78 md:text-base">{slide.text}</p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/#aula-gratis" className="button-light">
                  Agendar aula
                  <ArrowRight size={16} />
                </Link>
                <Link href="/nossa-casa" className="button-outline">
                  Conhecer a casa
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-7 left-0 right-0">
        <div className="site-shell flex items-center justify-between gap-5">
          <div className="flex w-full max-w-[360px] items-center gap-2" aria-label="Selecionar slide">
            {heroSlides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => goTo(index)}
                className="group relative h-5 flex-1"
                aria-label={`Ir para destaque ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
              >
                <span className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
                {active === index ? (
                  <motion.span
                    key={active}
                    className="absolute left-0 top-1/2 h-px bg-[#efc66d]"
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "45%" : "100%" }}
                    transition={{ duration: paused ? 0 : AUTOPLAY_DELAY / 1000, ease: "linear" }}
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-forest"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-forest"
              aria-label={paused ? "Reproduzir carrossel" : "Pausar carrossel"}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-forest"
              aria-label="Próximo slide"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
