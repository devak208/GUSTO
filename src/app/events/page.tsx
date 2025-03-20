"use client";

import React, { useEffect, useState } from "react";
import { getAllCategories, getEventsByCategory, Event } from "@/lib/events";
import { EventsSection } from "@/components/Events/EventsSection";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { Spotlight } from "@/components/UI/aceternity/spotlight";

export default function EventsPage() {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [eventsByCategory, setEventsByCategory] = useState<
    Record<string, Event[]>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);

        const eventsData: Record<string, Event[]> = {};
        for (const category of categoriesData) {
          eventsData[category.id] = await getEventsByCategory(category.id);
        }

        setEventsByCategory(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle scrolling to section based on URL hash
  useEffect(() => {
    if (!loading) {
      // Get the hash from the URL (e.g., #tech, #tech-ind, #non-tech)
      const hash = window.location.hash.substring(1);

      if (hash) {
        // Wait a bit longer for the DOM to fully render and layout to stabilize
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Add padding to account for fixed header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            
            // Scroll to the element with the header offset
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth"
            });

            // No need to set focus which causes visual white border
            // Just keep it accessible without the focus outline
            element.setAttribute("tabindex", "-1");
          }
        }, 1000); // Increased timeout to ensure content is fully rendered
      }
    }
  }, [loading]); // Re-run when loading state changes to ensure sections are rendered

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2] flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)]"></div>
      <StarsBackground className="z-0 opacity-20 dark:opacity-60" />
      <ShootingStars className="z-0 fixed inset-0" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.3)"
        darkModeFill="white"
      />

      <div className="container mx-auto px-4 py-12 z-10 relative mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-8">
          GUSTO &apos;25 Events
        </h1>

        <p className="text-center text-slate-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Explore our exciting lineup of events. Click on any event to view
          detailed information and rules.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          categories.map((category) => (
            <EventsSection
              key={category.id}
              title={category.name}
              events={eventsByCategory[category.id] || []}
            />
          ))
        )}
      </div>
    </div>
  );
}
