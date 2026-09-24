"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Pencil } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

type Answers = {
  name: string;
  experience: string;
  goal: string;
  health: string;
  period: string;
  consent: boolean;
};

const initialAnswers: Answers = {
  name: "",
  experience: "",
  goal: "",
  health: "",
  period: "",
  consent: false,
};

const experienceOptions = ["Nunca pratiquei", "Já pratiquei", "Pratico atualmente"];
const goalOptions = ["Reduzir estresse", "Cuidar de dores", "Ganhar mobilidade", "Meditar melhor", "Autoconhecimento"];
const periodOptions = ["Manhã", "Tarde", "Noite", "Quero ver a grade"];

export function AnamnesisSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const total = 6;

  const nameRef = useRef<HTMLInputElement>(null);
  const healthRef = useRef<HTMLTextAreaElement>(null);
  // Evita o autofoco na montagem: ele forçaria o navegador a rolar a página
  // direto para esta seção ao abrir a landing page.
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (!hasNavigated.current) return;
    if (step === 0) nameRef.current?.focus({ preventScroll: true });
    if (step === 3) healthRef.current?.focus({ preventScroll: true });
  }, [step]);

  const goToStep = (next: number) => {
    hasNavigated.current = true;
    setStep(next);
  };

  const canAdvance = useMemo(() => {
    if (step === 0) return answers.name.trim().length >= 2 && answers.name.trim().length <= 120;
    if (step === 1) return Boolean(answers.experience);
    if (step === 2) return Boolean(answers.goal);
    if (step === 3) return answers.health.trim().length >= 2 && answers.health.trim().length <= 1000;
    if (step === 4) return Boolean(answers.period);
    return answers.consent;
  }, [answers, step]);

  const setValue = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!canAdvance || submitting) return;
    if (step < total - 1) {
      goToStep(step + 1);
      return;
    }

    const message = [
      "Olá! Preenchi a ficha de aula experimental no site da Mãe Divina Yôga.",
      "",
      `Nome: ${answers.name}`,
      `Experiência: ${answers.experience}`,
      `Objetivo principal: ${answers.goal}`,
      `Cuidados ou condições informadas: ${answers.health}`,
      `Preferência de horário: ${answers.period}`,
      "",
      "Gostaria de agendar minha aula grátis.",
    ].join("\n");

    const whatsappLink = whatsappUrl(message);
    setFallbackUrl(whatsappLink);
    setSubmitError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, website }),
      });
      if (!response.ok) throw new Error("Lead submission failed");
      window.location.assign(whatsappLink);
    } catch {
      setSubmitError("Não foi possível salvar sua ficha agora. Tente novamente ou converse diretamente pelo WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const counter = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
        {step + 1}
      </span>
      <span>de {total} · menos de 2 minutos</span>
    </>
  );

  return (
    <section id="aula-gratis" className="relative overflow-hidden bg-forest py-24 text-white md:py-36">
      <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-white/8 lg:block" />
      <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-white/8 lg:block" />
      <div className="content-shell relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
        <div>
          <span className="eyebrow !text-gold">Sua primeira prática</span>
          <h2 className="display-title mt-6 text-[3.4rem] sm:text-[4.6rem] lg:text-[6.5rem] text-[#fffaf5]">
            Antes da aula, uma pequena escuta.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/68 md:text-base">
            Responda uma pergunta por vez. Com sua autorização, a ficha será salva para a equipe e você poderá continuar a conversa pelo WhatsApp.
          </p>
          <div className="mt-10 hidden items-center gap-4 text-xs text-white/48 lg:flex">{counter}</div>
        </div>

        <form onSubmit={submit} className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute -left-[9999px]"
          />
          <div className="mb-8 flex gap-2 lg:mb-10" aria-hidden="true">
            {Array.from({ length: total }).map((_, index) => (
              <span
                key={index}
                className={`h-1 flex-1 transition-colors ${index <= step ? "bg-gold" : "bg-white/15"}`}
              />
            ))}
          </div>

          <div className="lg:min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {step === 0 ? (
                  <Question title="Como podemos chamar você?" helper="Seu primeiro nome já é suficiente.">
                    <div className="mt-7 lg:mt-10">
                      <label
                        htmlFor="anamnesis-name"
                        className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold"
                      >
                        <Pencil size={12} />
                        Seu nome
                      </label>
                      <input
                        id="anamnesis-name"
                        ref={nameRef}
                        value={answers.name}
                        onChange={(event) => setValue("name", event.target.value)}
                        maxLength={120}
                        placeholder="Digite aqui seu nome"
                        autoComplete="given-name"
                        className="mt-3 w-full rounded-sm border border-white/30 bg-white/[0.06] px-4 py-4 font-display text-3xl text-white placeholder:font-sans placeholder:text-base placeholder:text-white/35 focus:border-gold focus:bg-white/[0.09] focus:outline-none sm:text-4xl md:text-5xl lg:mt-4 lg:border-0 lg:border-b lg:bg-transparent lg:px-0 lg:pb-4 lg:pt-2 lg:focus:bg-transparent"
                      />
                    </div>
                  </Question>
                ) : null}

                {step === 1 ? (
                  <Question title="Qual é a sua relação com o Yoga?" helper="Não existe resposta certa.">
                    <Options
                      options={experienceOptions}
                      selected={answers.experience}
                      onSelect={(value) => setValue("experience", value)}
                    />
                  </Question>
                ) : null}

                {step === 2 ? (
                  <Question title="O que mais chama você para a prática agora?" helper="Escolha a intenção principal deste momento.">
                    <Options
                      options={goalOptions}
                      selected={answers.goal}
                      onSelect={(value) => setValue("goal", value)}
                    />
                  </Question>
                ) : null}

                {step === 3 ? (
                  <Question
                    title="Há alguma condição, dor ou cuidado importante?"
                    helper="Se não houver, escreva “não”. Isso ajuda a professora a receber você com segurança."
                  >
                    <div className="mt-7 lg:mt-8">
                      <label
                        htmlFor="anamnesis-health"
                        className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold"
                      >
                        <Pencil size={12} />
                        Escreva sua resposta
                      </label>
                      <textarea
                        id="anamnesis-health"
                        ref={healthRef}
                        value={answers.health}
                        onChange={(event) => setValue("health", event.target.value)}
                        maxLength={1000}
                        placeholder="Ex.: dor lombar, cirurgia recente… ou apenas “não”."
                        rows={4}
                        className="mt-3 w-full resize-none rounded-sm border border-white/30 bg-white/[0.06] p-4 text-sm leading-7 text-white placeholder:text-white/35 focus:border-gold focus:bg-white/[0.09] focus:outline-none"
                      />
                    </div>
                  </Question>
                ) : null}

                {step === 4 ? (
                  <Question title="Qual período costuma funcionar melhor?" helper="Vamos confirmar a turma disponível no WhatsApp.">
                    <Options
                      options={periodOptions}
                      selected={answers.period}
                      onSelect={(value) => setValue("period", value)}
                    />
                  </Question>
                ) : null}

                {step === 5 ? (
                  <Question title={`Tudo certo, ${answers.name}.`} helper="Sua ficha será salva apenas com sua autorização.">
                    <label className="mt-7 flex cursor-pointer items-start gap-4 border border-white/20 p-5 lg:mt-10">
                      <input
                        type="checkbox"
                        checked={answers.consent}
                        onChange={(event) => setValue("consent", event.target.checked)}
                        className="mt-1 h-4 w-4 accent-[#c4923f]"
                      />
                      <span className="text-xs leading-6 text-white/68">
                        Autorizo a Mãe Divina Yôga a armazenar minhas respostas, inclusive a informação sobre saúde que forneci, para organizar minha aula experimental. Também poderei enviar a mensagem à equipe pelo WhatsApp.
                      </span>
                    </label>
                  </Question>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/15 pt-6 lg:mt-8">
            <button
              type="button"
              onClick={() => goToStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="flex min-h-11 items-center gap-2 text-xs font-semibold uppercase text-white/62 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowLeft size={15} />
              Voltar
            </button>
            <button
              type="submit"
              disabled={!canAdvance || submitting}
              className="button-light disabled:cursor-not-allowed disabled:opacity-35"
            >
              {step === total - 1 ? (
                <>
                  {submitting ? "Salvando..." : "Salvar e abrir WhatsApp"} <MessageCircle size={16} />
                </>
              ) : (
                <>
                  Continuar <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          {submitError ? (
            <div role="alert" className="mt-5 border border-[#efc66d]/50 p-4 text-sm leading-6 text-white">
              <p>{submitError}</p>
              <a href={fallbackUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-[#efc66d] underline">
                Conversar sem salvar a ficha
              </a>
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-4 text-xs text-white/48 lg:hidden">{counter}</div>
        </form>
      </div>
    </section>
  );
}

function Question({
  title,
  helper,
  children,
}: {
  title: string;
  helper: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="font-display text-[2.4rem] leading-[1.02] text-[#fffaf5] sm:text-[3.2rem] lg:text-[4.2rem]">{title}</legend>
      <p className="mt-4 text-xs leading-5 text-white/50">{helper}</p>
      {children}
    </fieldset>
  );
}

function Options({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:mt-9" role="radiogroup">
      {options.map((option) => {
        const isSelected = option === selected;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(option)}
            className={`flex min-h-14 items-center justify-between border px-4 text-left text-xs font-semibold transition-colors ${
              isSelected
                ? "border-gold bg-gold text-forest"
                : "border-white/20 bg-white/[0.03] text-white/74 hover:border-white/50 hover:text-white"
            }`}
          >
            {option}
            {isSelected ? <Check size={16} /> : null}
          </button>
        );
      })}
    </div>
  );
}
