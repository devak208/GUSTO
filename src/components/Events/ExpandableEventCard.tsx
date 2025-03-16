"use client";
import Image from "next/image";
import React, { useId } from "react";
import { motion } from "motion/react";
import { Event } from "@/lib/events";
import { useRouter } from "next/navigation";

interface ExpandableEventCardProps {
  events: Event[];
}

export function ExpandableEventCard({ events }: ExpandableEventCardProps) {
  const id = useId();
  const router = useRouter();

  // Group events by category
  const eventsByCategory = events.reduce((acc, event) => {
    const category = event.category || "Other Events";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const handleEventClick = (eventId: string) => {
    // Store the current scroll position before navigation
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
    router.push(`/events/${eventId}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {Object.entries(eventsByCategory).map(([category, categoryEvents]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2 border-slate-200 dark:border-slate-700">
            {category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryEvents.map((event) => (
              <motion.div
                layoutId={`card-${event.id}-${id}`}
                key={`card-${event.id}-${id}`}
                onClick={() => handleEventClick(event.id)}
                className="flex flex-col bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  layoutId={`image-${event.id}-${id}`}
                  className="w-full h-48 overflow-hidden"
                >
                  <Image
                    width={400}
                    height={300}
                    src={event.image || "/images/event-placeholder.jpg"}
                    alt={event.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <motion.h3
                    layoutId={`title-${event.id}-${id}`}
                    className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-1"
                  >
                    {event.title}
                  </motion.h3>
                  
                  <motion.p
                    layoutId={`description-${event.id}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm mb-2"
                  >
                    {event.date}
                  </motion.p>
                  
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 flex-grow">
                    {event.description.length > 100 
                      ? `${event.description.substring(0, 100)}...` 
                      : event.description}
                  </p>
                  
                  <motion.div
                    layoutId={`button-${event.id}-${id}`}
                    className="mt-auto"
                  >
                    <button className="w-full py-2 text-sm rounded-md font-bold bg-gray-100 dark:bg-gray-700 hover:bg-green-500 hover:text-white text-black dark:text-white transition-colors duration-300">
                      View Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}; 