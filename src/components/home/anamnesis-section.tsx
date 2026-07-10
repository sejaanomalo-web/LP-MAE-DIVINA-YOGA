"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
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
  const total = 6;

  const canAdvance = useMemo(() => {
    if (step === 0) return answers.name.trim().length >= 2;
    if (step === 1) return Boolean(answers.experience);
    if (step === 2) return Boolean(answers.goal);
    if (step === 3) return answers.health.trim().length >= 2;
    if (step === 4) return Boolean(answers.period);
    return answers.consent;
  }, [answers, step]);

  const setValue = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!canAdvance) return;
    if (step < total - 1) {
      setStep((current) => current + 1);
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

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="aula-gratis" className="relative overflow-hidden bg-forest py-24 text-white md:py-36">
      <div className="absolute bottom-0 left-[8%] top-0 w-px bg-white/8" />
      <div className="absolute bottom-0 right-[8%] top-0 w-px bg-white/8" />
      <div className="content-shell relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <span className="eyebrow !text-gold">Sua primeira prática</span>
          <h2 className="display-title mt-6 text-[3.4rem] sm:text-[4.6rem] lg:text-[6.5rem] text-[#fffaf5]">
            Antes da aula, uma pequena escuta.
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/68 md:text-base">
            Responda uma pergunta por vez. Ao final, sua ficha será preparada em uma mensagem para você enviar diretamente pelo WhatsApp.
          </p>
          <div className="mt-10 flex items-center gap-4 text-xs text-white/48">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold">
              {step + 1}
            </span>
            <span>de {total} · menos de 2 minutos</span>
          </div>
        </div>

        <form onSubmit={submit} className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div className="mb-10 flex gap-2" aria-hidden="true">
            {Array.from({ length: total }).map((_, index) => (
              <span
                key={index}
                className={`h-1 flex-1 transition-colors ${index <= step ? "bg-gold" : "bg-white/15"}`}
              />
            ))}
          </div>

          <div className="min-h-[360px]">
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
                    <label className="screen-reader-only" htmlFor="anamnesis-name">Nome</label>
                    <input
                      id="anamnesis-name"
                      autoFocus
                      value={answers.name}
                      onChange={(event) => setValue("name", event.target.value)}
                      placeholder="Digite seu nome"
                      autoComplete="given-name"
                      className="mt-10 w-full border-b border-white/35 bg-transparent pb-4 font-display text-4xl text-white placeholder:text-white/25 focus:border-gold focus:outline-none md:text-5xl"
                    />
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
                    <label className="screen-reader-only" htmlFor="anamnesis-health">Cuidados de saúde</label>
                    <textarea
                      id="anamnesis-health"
                      autoFocus
                      value={answers.health}
                      onChange={(event) => setValue("health", event.target.value)}
                      placeholder="Conte apenas o que for relevante para a prática"
                      rows={4}
                      className="mt-8 w-full resize-none border border-white/25 bg-white/[0.04] p-4 text-sm leading-7 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                    />
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
                  <Question title={`Tudo certo, ${answers.name}.`} helper="Sua ficha não é armazenada pelo site.">
                    <label className="mt-10 flex cursor-pointer items-start gap-4 border border-white/20 p-5">
                      <input
                        type="checkbox"
                        checked={answers.consent}
                        onChange={(event) => setValue("consent", event.target.checked)}
                        className="mt-1 h-4 w-4 accent-[#c4923f]"
                      />
                      <span className="text-xs leading-6 text-white/68">
                        Autorizo a criação da mensagem com minhas respostas para envio voluntário à equipe da Mãe Divina pelo WhatsApp.
                      </span>
                    </label>
                  </Question>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/15 pt-6">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              disabled={step === 0}
              className="flex min-h-11 items-center gap-2 text-xs font-semibold uppercase text-white/62 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowLeft size={15} />
              Voltar
            </button>
            <button
              type="submit"
              disabled={!canAdvance}
              className="button-light disabled:cursor-not-allowed disabled:opacity-35"
            >
              {step === total - 1 ? (
                <>
                  Abrir WhatsApp <MessageCircle size={16} />
                </>
              ) : (
                <>
                  Continuar <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
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
    <div className="mt-9 grid gap-2 sm:grid-cols-2" role="radiogroup">
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
