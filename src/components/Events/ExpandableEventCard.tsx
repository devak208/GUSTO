"use client";
import Image from "next/image";
import React, { useId } from "react";
import { motion } from "framer-motion";
import { Event } from "@/lib/events";
import { useRouter } from "next/navigation";
import { Meteors } from "@/components/UI/aceternity/meteors";
import { FaArrowRight } from "react-icons/fa";

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
    if (typeof window !== "undefined") {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    }
    router.push(`/events/${eventId}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {Object.entries(eventsByCategory).map(([category, categoryEvents]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-b pb-3 border-slate-200 dark:border-slate-700">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {categoryEvents.map((event) => (
              <div
                key={`card-${event.id}-${id}`}
                className="min-h-[20rem] w-full list-none"
              >
                <div className="w-full relative h-full">
                  <div className="relative shadow-xl bg-white dark:bg-neutral-950 border border-gray-200 dark:border-[#1e293b] px-6 py-8 h-full overflow-hidden rounded-xl flex flex-col justify-between">
                    <motion.div
                      layoutId={`card-${event.id}-${id}`}
                      onClick={() => handleEventClick(event.id)}
                      className="relative flex h-full w-full flex-col justify-between gap-6 cursor-pointer z-10"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative flex flex-1 flex-col justify-between gap-6">
                        <motion.div
                          layoutId={`image-${event.id}-${id}`}
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
                            layoutId={`title-${event.id}-${id}`}
                            className="font-bold text-xl text-slate-900 dark:text-white mb-1 relative z-50"
                          >
                            {event.title}
                          </motion.h3>

                          <motion.p
                            layoutId={`description-${event.id}-${id}`}
                            className="font-normal text-sm text-slate-600 dark:text-gray-400 mb-1 relative z-50"
                          >
                            {event.date}
                          </motion.p>

                          <p className="font-normal text-sm text-slate-600 dark:text-gray-400 mb-3 relative z-50 line-clamp-3">
                            {event.description}
                          </p>
                        </div>

                        <motion.div
                          layoutId={`button-${event.id}-${id}`}
                          className="mt-auto"
                        >
                          <button className="w-full px-6 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-[#1e293b] dark:hover:bg-[#2d3748] text-slate-800 dark:text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                            Explore
                            <FaArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
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
      className="h-4 w-4 text-slate-900 dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
