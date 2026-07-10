import type { MetadataRoute } from "next";
import { seedEvents } from "@/data/events";

const baseUrl = "https://mae-divina-yoga.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/nossa-casa",
    "/praticas",
    "/eventos",
    "/empresas",
    "/loja",
    "/edificacoes",
    "/contato",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...seedEvents.map((event) => ({
      url: `${baseUrl}/eventos/${event.slug}`,
      lastModified: new Date(`${event.date}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
