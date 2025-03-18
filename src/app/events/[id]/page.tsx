import React from "react";
import { getEventById, getAllEvents } from "@/lib/events";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";

// Generate static paths for all events
export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

// Define proper props type matching Next.js 15 expectations
type PageProps = {
  params:
    | {
        id: string;
      }
    | Promise<{ id: string }>;
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function EventPage({ params }: PageProps) {
  // In Next.js 15, always await params to access its properties
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
