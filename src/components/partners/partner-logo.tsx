import Image from "next/image";
import type { ReactNode } from "react";
import type { Partner } from "@/data/partners";

type PartnerLogoProps = {
  partner: Partner;
  /** Altura padronizada do espaço do logo. */
  size?: "sm" | "md";
  className?: string;
};

const heights = {
  sm: "h-16 md:h-[4.5rem]",
  md: "h-20 md:h-24",
};

/**
 * Espaço do logotipo de um parceiro. Sem `partner.logo`, mostra o placeholder "LOGO".
 * Com logo, exibe a imagem contida no mesmo espaço (mesma altura em todos os formatos).
 */
export function PartnerLogo({ partner, size = "md", className = "" }: PartnerLogoProps) {
  const box = `relative flex w-full items-center justify-center rounded-[6px] border border-ink/12 bg-[#fffaf5] ${heights[size]} ${className}`;

  if (partner.logo) {
    return (
      <div className={`${box} px-5 py-4`}>
        <div className="relative h-full w-full">
          <Image src={partner.logo} alt={`Logo ${partner.name}`} fill sizes="240px" className="object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div className={box} role="img" aria-label={`Espaço reservado para o logo de ${partner.name}`}>
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ink/38">Logo</span>
    </div>
  );
}

/** Envolve o conteúdo num link para o site do parceiro, quando houver. */
export function PartnerLink({ partner, children, className = "" }: { partner: Partner; children: ReactNode; className?: string }) {
  if (!partner.url) return <div className={className}>{children}</div>;
  return (
    <a href={partner.url} target="_blank" rel="noreferrer" className={`${className} transition-opacity hover:opacity-80`}>
      {children}
    </a>
  );
}
