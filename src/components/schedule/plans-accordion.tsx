"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const plans = [
  "Yoga personal",
  "Aulas avulsas",
  "Mensal",
  "Trimestral",
  "Semestral",
  "Anual",
];

export function PlansAccordion() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openFromMenu = () => {
      if (window.location.hash === "#planos" && detailsRef.current) {
        detailsRef.current.open = true;
      }
    };

    openFromMenu();
    window.addEventListener("hashchange", openFromMenu);
    return () => window.removeEventListener("hashchange", openFromMenu);
  }, []);

  return (
    <details id="planos" ref={detailsRef} className="group scroll-mt-28 border border-ink/12 bg-[#fffaf5]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 marker:hidden md:p-8 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="eyebrow">Planos e valores</span>
          <span className="mt-4 block font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Planos a partir de R$ 180,00 ao mês
          </span>
        </span>
        <ChevronDown size={22} className="shrink-0 text-terracotta transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>

      <div className="border-t border-ink/12 px-6 pb-7 pt-6 md:px-8 md:pb-9">
        <h3 className="text-sm font-semibold text-ink">Planos de aulas</h3>
        <ol className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {plans.map((plan, index) => (
            <li key={plan} className="flex items-baseline gap-3 text-sm text-ink-soft">
              <span className="text-[0.68rem] font-semibold text-terracotta">{String(index + 1).padStart(2, "0")}</span>
              {plan}
            </li>
          ))}
        </ol>
        <p className="mt-7 text-sm leading-7 text-ink-soft">Frequência: de 01 a 03 vezes na semana.</p>
        <p className="mt-1 text-sm leading-7 text-ink-soft">Descontos progressivos para cada plano e brindes.</p>
      </div>
    </details>
  );
}
