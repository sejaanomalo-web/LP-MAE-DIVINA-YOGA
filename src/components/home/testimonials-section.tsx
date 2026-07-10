"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="bg-[#fffaf5] py-24 md:py-36">
      <div className="content-shell">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <span className="eyebrow">O que dizem</span>
            <p className="mt-6 max-w-xs text-xs leading-6 text-ink-soft">
              A experiência da casa contada por quem encontra no tapete uma forma de voltar para si.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-forest hover:text-white"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-forest hover:text-white"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          <div className="relative border-l border-terracotta/30 pl-6 md:pl-12">
            <Quote size={36} strokeWidth={1} className="text-terracotta/45" />
            <div className="mt-7 min-h-[290px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.42 }}
                >
                  <blockquote className="font-display text-[2rem] font-medium leading-[1.08] text-ink sm:text-[2.8rem] lg:text-[4rem]">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-9 text-[0.68rem] font-bold uppercase text-terracotta">
                    {testimonial.author}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1 transition-all ${index === active ? "w-12 bg-terracotta" : "w-5 bg-ink/15"}`}
                  aria-label={`Ver depoimento de ${item.author}`}
                  aria-current={index === active ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
