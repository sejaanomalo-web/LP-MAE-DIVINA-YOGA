import { Droplets, Flame, Gem, PackageOpen, Shirt, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

const productIcons = {
  camisetas: Shirt,
  tapetes: PackageOpen,
  busties: Sparkles,
  velas: Flame,
  saquinhos: PackageOpen,
  cintos: PackageOpen,
  japas: Gem,
  incensos: Flame,
  oleos: Droplets,
  essencias: Sparkles,
};

export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  const Icon = productIcons[product.id as keyof typeof productIcons] ?? PackageOpen;

  return (
    <div
      className={`relative flex overflow-hidden border border-ink/10 bg-[#f5ece4] ${
        compact ? "min-h-[340px]" : "min-h-[500px] md:min-h-[620px]"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: product.accent }} />
      <Image
        src="/brand/logo-mae-divina.png"
        alt=""
        width={500}
        height={500}
        className="absolute -right-16 -top-16 w-[70%] max-w-[480px] opacity-[0.07] grayscale"
      />
      <div className="relative flex w-full flex-col justify-between p-7 md:p-11">
        <div className="flex items-start justify-between">
          <span className="text-[0.6rem] font-semibold uppercase text-ink-soft">Coleção Mãe Divina</span>
          <Icon size={32} strokeWidth={1.25} style={{ color: product.accent }} />
        </div>
        <div>
          <p className="font-display text-[3.2rem] font-medium leading-[0.9] text-ink sm:text-[4.3rem] lg:text-[6.2rem]">
            {product.shortName}
          </p>
          <div className="mt-7 max-w-md border-l border-ink/20 pl-4">
            <p className="text-xs leading-6 text-ink-soft">{product.photoBrief}</p>
            <p className="mt-2 text-[0.58rem] font-semibold uppercase" style={{ color: product.accent }}>
              Espaço reservado para fotografia de produto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
