"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductVisual } from "@/components/shop/product-visual";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/whatsapp";

export function ShopShowcase() {
  const [activeId, setActiveId] = useState(products[0].id);
  const activeProduct = products.find((product) => product.id === activeId) ?? products[0];

  return (
    <section className="bg-paper-warm py-24 md:py-36">
      <div className="content-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Loja da Mãe</span>
            <h2 className="display-title mt-5 text-[3.4rem] text-ink sm:text-[4.6rem] lg:text-[6.5rem]">Objetos com intenção.</h2>
          </div>
          <p className="max-w-sm text-xs leading-6 text-ink-soft md:text-right">
            Uma curadoria para acompanhar a prática, o ritual e os pequenos retornos ao presente.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="border-y border-ink/15 lg:border-y-0 lg:border-r lg:pr-5">
            {products.map((product, index) => {
              const isActive = product.id === activeProduct.id;
              return (
                <button
                  key={product.id}
                  type="button"
                  onMouseEnter={() => setActiveId(product.id)}
                  onFocus={() => setActiveId(product.id)}
                  onClick={() => setActiveId(product.id)}
                  className={`flex w-full items-center justify-between border-b border-ink/10 py-4 text-left text-sm transition-colors last:border-b-0 ${
                    isActive ? "font-semibold text-terracotta" : "text-ink-soft hover:text-ink"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[0.56rem] text-ink/35">{String(index + 1).padStart(2, "0")}</span>
                    {product.shortName}
                  </span>
                  <ArrowRight size={14} className={isActive ? "opacity-100" : "opacity-0"} />
                </button>
              );
            })}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <ProductVisual product={activeProduct} />
              </motion.div>
            </AnimatePresence>
            <div className="mt-5 flex flex-col gap-5 border-b border-ink/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-ink-soft">{activeProduct.description}</p>
              <a
                href={whatsappUrl(`Olá! Quero consultar disponibilidade e valores de ${activeProduct.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="button-primary shrink-0"
              >
                Consultar
                <MessageCircle size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/loja" className="flex items-center gap-2 text-xs font-bold uppercase text-terracotta">
            Visitar a loja completa <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
