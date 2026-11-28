import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { ProductVisual } from "@/components/shop/product-visual";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Loja da Mãe",
  description: "Camisetas, tapetes, bolsters, japamalas, incensos, óleos essenciais e objetos para a prática.",
};

export default function LojaPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="Loja da Mãe"
        title="Objetos com intenção."
        text="Uma curadoria para acompanhar sua prática e transformar pequenos gestos em rituais de presença."
        image="/images/loja-altar-vela.jpg"
        imageAlt="Altar com vela acesa, flores e imagens sagradas na Mãe Divina"
        position="center 55%"
      />
      <section className="bg-paper py-24 md:py-36">
        <div className="content-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Loja da Mãe</p>
            <h2 className="display-title mt-5 text-[3.5rem] sm:text-[5rem] lg:text-[7rem]">Escolha o que acompanha o seu momento.</h2>
            <p className="mt-6 text-xs leading-6 text-ink-soft">Conheça os itens da nossa curadoria. Disponibilidade, tamanhos e valores são confirmados pelo WhatsApp.</p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} id={product.id} className="scroll-mt-28">
                <ProductVisual product={product} compact />
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 border-x border-ink/12 bg-[#fffaf5] p-2">
                    {product.images.slice(1).map((image) => (
                      <figure key={image.src} className="min-w-0">
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5ece4]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 30vw, 16vw"
                            className={product.imageFit === "contain" ? "object-contain" : "object-cover"}
                          />
                        </div>
                        {image.label && <figcaption className="pt-2 text-center text-[0.65rem] font-semibold uppercase text-ink-soft">{image.label}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                <div className="border border-t-0 border-ink/12 bg-[#fffaf5] p-5 md:p-7">
                  {product.id === "bolster" && <span id="buster" className="scroll-mt-28" aria-hidden="true" />}
                  <h3 className="font-display text-3xl font-semibold text-ink">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{product.description}</p>
                  {product.details?.map((detail) => (
                    <p key={detail} className="mt-3 text-xs leading-6 text-ink-soft">{detail}</p>
                  ))}
                  {product.availabilityNote && <p className="mt-4 text-xs font-semibold leading-6 text-terracotta">{product.availabilityNote}</p>}
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
