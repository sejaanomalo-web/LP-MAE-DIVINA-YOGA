import type { Metadata } from "next";
import { EventDetailClient } from "@/components/events/event-detail-client";
import { seedEvents } from "@/data/events";

export function generateStaticParams() {
  return seedEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = seedEvents.find((item) => item.slug === slug);
  return {
    title: event?.title ?? "Detalhes do Evento",
    description: event?.excerpt ?? "Evento da Mãe Divina Yôga.",
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EventDetailClient slug={slug} />;
}
