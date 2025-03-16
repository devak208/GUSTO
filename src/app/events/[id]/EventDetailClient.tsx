"use client";

import React, { useEffect, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/events';
import { motion } from 'motion/react';

interface EventDetailClientProps {
  event: Event;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const id = useId();
  
  useEffect(() => {
    // Restore scroll position on back navigation
    const handlePopState = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/events" 
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Events
      </Link>
      
      <motion.div 
        layoutId={`card-${event.id}-${id}`}
        initial={{ opacity: 0.8, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
      >
        <motion.div 
          layoutId={`image-${event.id}-${id}`}
          className="relative h-64 sm:h-80 md:h-96"
        >
          <Image 
            src={event.image || "/images/event-placeholder.jpg"} 
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <motion.h1 
              layoutId={`title-${event.id}-${id}`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
            >
              {event.title}
            </motion.h1>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 sm:mt-0 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
            >
              {event.category || event.name}
            </motion.span>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <motion.div 
              layoutId={`description-${event.id}-${id}`}
              className="flex items-center text-slate-600 dark:text-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {event.date}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center text-slate-600 dark:text-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {event.venue || event.location}
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Description</h2>
            <p className="text-slate-600 dark:text-slate-300">{event.description}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-50 dark:bg-zinc-800 p-5 rounded-lg border border-slate-200 dark:border-zinc-700"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Event Rules</h2>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="pl-2">{rule}</li>
              ))}
            </ul>
          </motion.div>
          
          {event.registrationLink && (
            <motion.div 
              layoutId={`button-${event.id}-${id}`}
              className="mt-6 flex justify-center"
            >
              <a 
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Register Now
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
} 