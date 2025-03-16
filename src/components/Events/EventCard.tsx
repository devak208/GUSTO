"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/events';

interface EventCardProps {
  event: Event;
  simplified?: boolean;
}

export function EventCard({ event, simplified = false }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="block">
      <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative h-48">
          <Image 
            src={event.image} 
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{event.title}</h3>
          <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{event.name}</h4>
          
          {!simplified && (
            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-2">{event.description}</p>
          )}
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">{event.date}</span>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{event.venue}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
