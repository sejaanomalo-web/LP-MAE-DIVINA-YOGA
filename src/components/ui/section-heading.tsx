type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</span>
      <h2
        className={`display-title mt-5 max-w-3xl text-[2.75rem] sm:text-[3.6rem] lg:text-[5.5rem] ${
          light ? "text-[#fffaf5]" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-6 max-w-2xl text-sm leading-7 md:text-base ${
            light ? "text-white/68" : "text-ink-soft"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
