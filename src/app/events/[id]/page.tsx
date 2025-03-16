import React from 'react';
import { getEventById, getAllEvents } from '@/lib/events';
import { notFound } from 'next/navigation';
import EventDetailClient from './EventDetailClient';

export function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);
  
  if (!event) {
    notFound();
  }
  
  return <EventDetailClient event={event} />;
} 