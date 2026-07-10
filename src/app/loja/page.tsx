import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ProductVisual } from "@/components/shop/product-visual";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Loja da Mãe",
  description: "Camisetas, tapetes, incensos, japas, óleos essenciais e objetos para a prática.",
};

export default function LojaPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Loja da Mãe"
        title="Objetos com intenção."
        text="Uma curadoria para acompanhar sua prática e transformar pequenos gestos em rituais de presença."
        image="/images/casa-altar.jpg"
        imageAlt="Detalhes e objetos do espaço Mãe Divina"
        position="center"
      />
      <section className="bg-paper py-24 md:py-36">
        <div className="content-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Catálogo inicial</p>
            <h2 className="display-title mt-5 text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">Escolha o que acompanha o seu momento.</h2>
            <p className="mt-6 text-xs leading-6 text-ink-soft">Os quadros abaixo definem exatamente os recortes fotográficos necessários para a próxima etapa. Disponibilidade, tamanhos e valores são confirmados pelo WhatsApp.</p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} id={product.id} className="scroll-mt-28">
                <ProductVisual product={product} compact />
                <div className="border border-t-0 border-ink/12 bg-[#fffaf5] p-5">
                  <p className="text-xs leading-6 text-ink-soft">{product.description}</p>
                  <a href={whatsappUrl(`Olá! Quero consultar ${product.name}.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase text-terracotta">Consultar disponibilidade <MessageCircle size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
