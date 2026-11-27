import type { SiteVideo } from "@/data/media";
import { Reveal } from "@/components/ui/reveal";

export function SiteVideoSection({ video }: { video: SiteVideo }) {
  if (!video.src) return null;

  const vertical = video.orientation === "vertical";

  return (
    <section id="video" className="bg-paper pt-20 md:pt-28">
      <div className="content-shell">
        <Reveal>
          <div className={`mx-auto overflow-hidden border border-ink/12 bg-forest shadow-[0_30px_80px_-40px_rgba(36,55,45,0.55)] ${vertical ? "max-w-sm" : "max-w-5xl"}`}>
            <video
              className={`block h-auto w-full ${vertical ? "aspect-[9/16]" : "aspect-video"} object-cover`}
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              aria-label={video.title}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
