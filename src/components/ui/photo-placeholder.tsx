import Image from "next/image";

type PhotoPlaceholderProps = {
  label: string;
  brief: string;
  className?: string;
};

export function PhotoPlaceholder({ label, brief, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex min-h-[320px] items-end overflow-hidden border border-terracotta/25 bg-paper-warm p-6 ${className}`}
    >
      <Image
        src="/brand/logo-mae-divina.png"
        alt=""
        width={300}
        height={300}
        className="absolute -right-10 -top-8 w-56 opacity-[0.08] grayscale"
      />
      <div className="relative max-w-xs">
        <p className="font-display text-3xl font-medium text-terracotta">{label}</p>
        <p className="mt-2 text-xs leading-5 text-ink-soft">{brief}</p>
      </div>
    </div>
  );
}
