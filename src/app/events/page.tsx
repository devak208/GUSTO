import type { Metadata } from "next";
import EventsPageClient from "@/components/Events/EventsPageClient";
import {
  getAllCategories,
  getEventsByCategory,
  type Event,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore the exciting lineup of technical and non-technical events at GUSTO '25, the national-level technical symposium organized by the Department of Information Technology at Government College of Engineering, Erode.",
  openGraph: {
    title: "Events",
    description:
      "Explore the exciting lineup of technical and non-technical events at GUSTO '25, the national-level technical symposium organized by the Department of Information Technology at Government College of Engineering, Erode.",
    images: ["/logos/AIT/gold.png"],
  },
};

export default async function EventsPage() {
  // Fetch data server-side
  const categories = await getAllCategories();
  const eventsData: Record<string, Event[]> = {};

  for (const category of categories) {
    eventsData[category.id] = await getEventsByCategory(category.id);
  }

  return (
    <EventsPageClient
      initialCategories={categories}
      initialEvents={eventsData}
    />
  );
}
