import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fichas recebidas",
  robots: { index: false, follow: false },
};

export default function LeadsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
