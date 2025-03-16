import React from "react";
import { getEventById, getAllEvents } from "@/lib/events";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";

// Generate static paths for all events
export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

// Define proper props type matching Next.js 15 expectations
type PageProps = {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function EventPage({ params }: PageProps) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
