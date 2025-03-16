import eventsData from '@/data/events.json';

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
};

export type EventsData = {
  technicalEvents: Event[];
  technicalIndividualEvents: Event[];
  nonTechnicalEvents: Event[];
};

export function getAllEvents(): Event[] {
  const data = eventsData as EventsData;
  const categories = getAllCategories();
  
  return [
    ...data.technicalEvents.map(event => ({
      ...event,
      category: categories.find(cat => cat.id === 'technicalEvents')?.name || 'Technical Events'
    })),
    ...data.technicalIndividualEvents.map(event => ({
      ...event,
      category: categories.find(cat => cat.id === 'technicalIndividualEvents')?.name || 'Technical Individual Events'
    })),
    ...data.nonTechnicalEvents.map(event => ({
      ...event,
      category: categories.find(cat => cat.id === 'nonTechnicalEvents')?.name || 'Non-Technical Events'
    }))
  ];
}

export function getEventById(id: string): Event | undefined {
  const allEvents = getAllEvents();
  return allEvents.find(event => event.id === id);
}

export function getEventsByCategory(category: keyof EventsData): Event[] {
  const data = eventsData as EventsData;
  return data[category];
}

export function getAllCategories(): { id: keyof EventsData; name: string }[] {
  return [
    { id: 'technicalEvents', name: 'Technical Events' },
    { id: 'technicalIndividualEvents', name: 'Technical Individual Events' },
    { id: 'nonTechnicalEvents', name: 'Non-Technical Events' }
  ];
} 