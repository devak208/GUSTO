"use client";
import React from 'react';
import { EventCard } from './EventCard';
import { Event } from '@/lib/events';

interface EventsSectionProps {
  title: string;
  events: Event[];
}

export function EventsSection({ title, events }: EventsSectionProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
} 