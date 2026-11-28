const plans = [
  "Yoga personal",
  "Aulas avulsas",
  "Mensal",
  "Trimestral",
  "Semestral",
  "Anual",
];

export function PlansAccordion() {
  return (
    <section id="planos" className="scroll-mt-28 border border-ink/12 bg-[#fffaf5]">
      <div className="p-6 md:p-8">
        <span>
          <span className="eyebrow">Planos e valores</span>
          <span className="mt-4 block font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Planos a partir de R$ 180,00 ao mês
          </span>
        </span>
      </div>

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
    </section>
  );
}
