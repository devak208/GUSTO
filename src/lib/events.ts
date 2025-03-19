import eventsData from "@/data/events.json";

export type Event = {
  id: string;
  title: string;
  name: string;
  image: string;
  description: string;
  rules: string[];
  date: string;
  venue: string;
  location?: string;
  registrationLink?: string;
  category?: string;
  coordinator1?: {
    name: string;
    phone: string;
  };
  coordinator2?: {
    name: string;
    phone: string;
  };
};

export type EventsData = {
  technicalEvents: Event[];
  technicalIndividualEvents: Event[];
  nonTechnicalEvents: Event[];
};

export async function getAllEvents(): Promise<Event[]> {
  const data = eventsData as EventsData;
  const categories = await getAllCategories();

  return [
    ...data.technicalEvents.map((event) => ({
      ...event,
      category:
        categories.find((cat) => cat.id === "technicalEvents")?.name ||
        "Technical Events",
    })),
    ...data.technicalIndividualEvents.map((event) => ({
      ...event,
      category:
        categories.find((cat) => cat.id === "technicalIndividualEvents")
          ?.name || "Technical Individual Events",
    })),
    ...data.nonTechnicalEvents.map((event) => ({
      ...event,
      category:
        categories.find((cat) => cat.id === "nonTechnicalEvents")?.name ||
        "Non-Technical Events",
    })),
  ];
}

export async function getEventById(id: string): Promise<Event | undefined> {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getEventsByCategory(
  category: keyof EventsData
): Promise<Event[]> {
  const data = eventsData as EventsData;
  return data[category];
}

export async function getAllCategories(): Promise<
  { id: keyof EventsData; name: string }[]
> {
  return [
    { id: "technicalEvents", name: "Technical Events" },
    { id: "technicalIndividualEvents", name: "Technical Individual Events" },
    { id: "nonTechnicalEvents", name: "Non-Technical Events" },
  ];
}
