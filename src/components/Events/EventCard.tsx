"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/events';
import { Meteors } from "@/components/UI/aceternity/meteors";
import { motion } from "framer-motion";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="min-h-[24rem] w-full list-none">
      <div className="w-full relative h-full">
        <div className="relative shadow-xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-[#1e293b] px-6 py-8 h-full overflow-hidden rounded-xl flex flex-col justify-between">
          <motion.div
            className="relative flex h-full w-full flex-col justify-between gap-6 z-10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex flex-1 flex-col justify-between gap-6">
              <motion.div 
                className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  fill
                  src={event.image || "/images/event-placeholder.jpg"}
                  alt={event.title}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              
              <div className="space-y-2">
                <motion.h3
                  className="font-bold text-xl text-slate-900 dark:text-white mb-1 relative z-50"
                >
                  {event.title}
                </motion.h3>
                
                <motion.p
                  className="font-normal text-sm text-slate-600 dark:text-gray-400 mb-1 relative z-50"
                >
                  {event.date}
                </motion.p>
                
                <p className="font-normal text-sm text-slate-600 dark:text-gray-400 mb-3 relative z-50 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                    {event.venue}
                  </span>
                  {event.category && (
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full">
                      {event.category}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mt-auto">
                <Link href={`/events/${event.id}`}>
                  <button className="w-full px-6 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#1e293b] dark:hover:bg-[#2d3748] text-slate-800 dark:text-white font-medium rounded-lg transition-colors duration-200">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
