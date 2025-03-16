"use client";
import React from 'react';
import Link from 'next/link';
import { Event } from '@/lib/events';

interface EventTitlesListProps {
  title: string;
  events: Event[];
}

export function EventTitlesList({ title, events }: EventTitlesListProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="bg-white/50 dark:bg-zinc-900/50 rounded-lg p-4 shadow-sm">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {events.map((event) => (
            <li key={event.id}>
              <Link 
                href={`/events/${event.id}`}
                className="flex items-center p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{event.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 