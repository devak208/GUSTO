"use client";
import React from 'react';
import { EventCard } from './EventCard';
import { Event } from '@/lib/events';
import { motion } from "framer-motion";

interface EventsSectionProps {
  title: string;
  events: Event[];
}

export function EventsSection({ title, events }: EventsSectionProps) {
  return (
    <div className="py-12 relative z-10">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 