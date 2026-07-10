import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  position?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  position = "center",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-forest pt-24 md:min-h-[690px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-[rgba(19,30,24,0.64)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
      <div className="site-shell relative flex min-h-[520px] items-end pb-16 pt-24 md:min-h-[590px] md:pb-20">
        <div className="max-w-4xl">
          <span className="eyebrow !text-[#efc66d]">{eyebrow}</span>
          <h1 className="display-title mt-6 text-[4.25rem] sm:text-[5.8rem] lg:text-[8.5rem] text-[#fffaf5]">{title}</h1>
          <div className="mt-7 flex max-w-2xl items-start gap-4 border-l border-white/35 pl-5">
            <ArrowDownRight className="mt-1 hidden shrink-0 text-[#efc66d] sm:block" size={22} />
            <p className="text-sm leading-7 text-white/76 md:text-base">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
