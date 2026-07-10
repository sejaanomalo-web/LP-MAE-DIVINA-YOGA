import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="flex min-h-[78svh] items-center bg-forest pt-28 text-white">
      <div className="content-shell py-20 text-center">
        <p className="eyebrow !text-gold">404</p>
        <h1 className="display-title mt-6 text-[4rem] text-[#fffaf5] sm:text-[5.6rem] lg:text-[8rem]">Este caminho não está por aqui.</h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/62">Volte para a casa e encontre novamente o ponto de partida.</p>
        <Link href="/" className="button-light mt-9"><ArrowLeft size={16} /> Voltar ao início</Link>
      </div>
    </main>
  );
}
