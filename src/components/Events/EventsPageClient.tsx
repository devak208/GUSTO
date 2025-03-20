"use client";

import { useEffect } from "react";
import { EventsSection } from "@/components/Events/EventsSection";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { Spotlight } from "@/components/UI/aceternity/spotlight";
import type { Event } from "@/lib/events";

interface EventsPageClientProps {
  initialCategories: Array<{ id: string; name: string }>;
  initialEvents: Record<string, Event[]>;
}

export default function EventsPageClient({
  initialCategories,
  initialEvents,
}: EventsPageClientProps) {
  // Handle scrolling to section based on URL hash
  useEffect(() => {
    const handleHashNavigation = () => {
      // Get the hash from the URL (e.g., #tech, #tech-ind, #non-tech)
      const hash = window.location.hash.slice(1);
      console.log("Hash navigation activated for:", hash);

      if (hash) {
        // Map of potential alternative IDs to check
        const hashMappings: Record<string, string[]> = {
          tech: ["tech", "technical-event", "technical-events"],
          "tech-ind": [
            "tech-ind",
            "technical-individual-event",
            "technical-individual-events",
          ],
          "non-tech": [
            "non-tech",
            "non-technical-event",
            "non-technical-events",
          ],
        };

        // Create a function to attempt scrolling multiple times
        const scrollToElement = (attempts = 0) => {
          console.log(
            `Attempt ${attempts + 1} to find element with id: ${hash}`
          );

          // First try the exact hash
          let element = document.getElementById(hash);

          // If not found, try alternative IDs based on our mapping
          if (!element && hashMappings[hash]) {
            for (const alternativeId of hashMappings[hash]) {
              if (alternativeId !== hash) {
                // Skip the one we already tried
                console.log(`Trying alternative id: ${alternativeId}`);
                element = document.getElementById(alternativeId);
                if (element) break;
              }
            }
          }

          if (element) {
            console.log(`Found element with id: ${element.id}`);
            // Calculate position accounting for potential fixed headers
            const headerOffset = 100;
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;

            // Smooth scroll to the element
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth",
            });

            // For accessibility
            element.setAttribute("tabindex", "-1");
            element.focus({ preventScroll: true });

            return true; // Successfully scrolled
          } else if (attempts < 10) {
            // Increase max attempts
            // Retry with increasing delays
            const delay = 300 * (attempts + 1); // Longer delays
            console.log(`Element not found. Retrying in ${delay}ms...`);
            setTimeout(() => scrollToElement(attempts + 1), delay);
            return false; // Not yet successful
          } else {
            console.log("Failed to find element after all attempts");
          }

          return false; // Failed after all attempts
        };

        // Start scroll attempts with a small initial delay
        setTimeout(() => scrollToElement(), 300);
      }
    };

    // Initial load handling
    if (window.location.hash) {
      console.log("Initial hash detected:", window.location.hash);
      handleHashNavigation();
    }

    // Handle hash changes during navigation
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

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

        {initialCategories.map((category) => (
          <EventsSection
            key={category.id}
            title={category.name}
            events={initialEvents[category.id] || []}
          />
        ))}
      </div>
    </div>
  );
}
