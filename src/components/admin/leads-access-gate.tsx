"use client";

import { useEffect, useRef, useState } from "react";

export function LeadsAccessGate() {
  const [message, setMessage] = useState("Validando acesso...");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get("access");
    window.history.replaceState(null, "", window.location.pathname + window.location.search);

    if (!token) {
      setMessage("Este painel exige o link privado completo. Solicite-o à equipe da Mãe Divina.");
      return;
    }

    fetch("/api/admin/leads/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Invalid access token");
        window.location.reload();
      })
      .catch(() => setMessage("O link é inválido ou o painel está temporariamente indisponível."));
  }, []);

  return (
    <main className="min-h-screen bg-paper px-5 pb-24 pt-36">
      <div className="mx-auto max-w-lg border border-ink/10 bg-white p-8 shadow-sm sm:p-12">
        <p className="eyebrow">Acesso reservado</p>
        <h1 className="display-title mt-5 text-5xl text-forest sm:text-6xl">Fichas recebidas</h1>
        <p className="mt-5 text-sm leading-7 text-ink-soft">{message}</p>
      </div>
    </main>
  );
}
