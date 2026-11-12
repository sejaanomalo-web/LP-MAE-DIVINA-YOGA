type OmIconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/** Símbolo OM (ॐ) com a mesma API básica dos ícones do lucide-react. */
export function OmIcon({ size = 24, className = "" }: OmIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center leading-none ${className}`}
      style={{ width: size, height: size, fontSize: size * 1.1 }}
    >
      ॐ
    </span>
  );
}
