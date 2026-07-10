import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteContact } from "@/data/site";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Mãe Divina Yôga",
  description: "Espaço de Yoga, meditação e vivências conscientes em Cascavel.",
  url: "https://mae-divina-yoga.vercel.app",
  image: "https://mae-divina-yoga.vercel.app/images/aula-hatha.jpg",
  telephone: "+55 45 99972-4978",
  sameAs: [siteContact.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Castro Alves, 2444",
    addressLocality: "Cascavel",
    addressRegion: "PR",
    addressCountry: "BR",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mae-divina-yoga.vercel.app"),
  title: {
    default: "Mãe Divina Yôga | Yoga, meditação e vivências em Cascavel",
    template: "%s | Mãe Divina Yôga",
  },
  description:
    "Espaço de cura, amor e acolhimento em Cascavel. Hatha Yoga, meditação, respiração consciente, eventos e vivências para todos os corpos.",
  keywords: [
    "Yoga em Cascavel",
    "Hatha Yoga",
    "meditação",
    "respiração consciente",
    "Mãe Divina Yoga",
  ],
  authors: [{ name: "Mãe Divina Yôga" }],
  openGraph: {
    title: "Mãe Divina Yôga",
    description: "Casa de cura, amor e acolhimento em Cascavel.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/aula-hatha.jpg",
        width: 1600,
        height: 1067,
        alt: "Prática de Hatha Yoga na Mãe Divina",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#24372d",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#conteudo"
          className="fixed left-4 top-3 z-[100] -translate-y-24 bg-paper px-4 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
