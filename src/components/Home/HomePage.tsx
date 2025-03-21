"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/UI/aceternity/text-generate-effect";
import { Cover } from "@/components/UI/aceternity/cover";
import MagicButton from "@/components/UI/aceternity/MagicButton";
import { getAllEvents } from "@/lib/events";
import Link from "next/link";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { ExpandableEventCard } from "@/components/Events/ExpandableEventCard";
import { Spotlight } from "@/components/UI/aceternity/spotlight";
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";
import type { Event } from "@/lib/events";
import CountdownTimer from "@/components/Home/CountdownTimer";
import GustoVideo from "@/components/Home/GustoVideo";
import { useTheme } from "next-themes";
import EventsTimeline from "@/components/Home/EventsTimeline";
import GoogleMapComponent from "@/components/Home/GoogleMap";
import ContactSection from "@/components/Home/ContactSection";

export default function HomePage() {
  const { theme } = useTheme();
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();
        setAllEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Only run on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Preload the video thumbnail
      const preloadImage = new Image();
      preloadImage.src = "/placeholder/video-thumbnail.png";

      // Preload YouTube player (helps reduce loading time)
      const preconnectYouTube = document.createElement("link");
      preconnectYouTube.rel = "preconnect";
      preconnectYouTube.href = "https://www.youtube.com";
      document.head.appendChild(preconnectYouTube);

      const preconnectYouTubeStatic = document.createElement("link");
      preconnectYouTubeStatic.rel = "preconnect";
      preconnectYouTubeStatic.href = "https://i.ytimg.com";
      document.head.appendChild(preconnectYouTubeStatic);

      return () => {
        document.head.removeChild(preconnectYouTube);
        document.head.removeChild(preconnectYouTubeStatic);
      };
    }
  }, []);

  // Handle navigation from other pages
  useEffect(() => {
    const handleStoredNavigation = () => {
      const scrollToSection = sessionStorage.getItem("scrollToSection");
      if (scrollToSection) {
        // Wait for the DOM to be ready and sections to be rendered
        setTimeout(() => {
          const element = document.getElementById(scrollToSection);
          if (element) {
            const headerOffset = 100;
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth",
            });
          }
          // Clear the stored navigation after processing
          sessionStorage.removeItem("scrollToSection");
        }, 1000); // Increased timeout to ensure content is fully rendered
      }
    };

    // Handle both initial load and route changes
    handleStoredNavigation();
    window.addEventListener("load", handleStoredNavigation);

    return () => {
      window.removeEventListener("load", handleStoredNavigation);
    };
  }, []);

  const welcomeText = ` Welcome to our`;
  const aboutText = `Join us at GUSTO 2025 at April 23rd for a celebration of innovation and talent!
            Experience workshops, competitions, and networking with industry
            leaders. Something amazing awaits every participant!`;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`relative w-full overflow-x-hidden ${
        mounted && theme === "dark" ? "dark" : "light"
      } dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center`}
    >
      <style jsx>{`
        .gusto-animated span {
          display: inline-block;
          position: relative;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          backface-visibility: hidden;
        }
        .gusto-animated span:nth-child(1) {
          animation-name: tumble-1;
          animation-delay: 0s;
        }
        .gusto-animated span:nth-child(2) {
          animation-name: tumble-2;
          animation-delay: 0.1s;
        }
        .gusto-animated span:nth-child(3) {
          animation-name: tumble-3;
          animation-delay: 0.2s;
        }
        .gusto-animated span:nth-child(4) {
          animation-name: tumble-4;
          animation-delay: 0.3s;
        }
        .gusto-animated span:nth-child(5) {
          animation-name: tumble-5;
          animation-delay: 0.4s;
        }

        /* Light theme - Black with white glow */
        :global(.light) .gusto-animated span {
          color: #000000; /* Black text */
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
            0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.3);
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
          font-weight: 700;
        }

        /* Dark theme - Yellow glow */
        :global(.dark) .gusto-animated span {
          color: #ffd700; /* Yellow/gold color */
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5),
            0 0 20px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.2);
          filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
        }

        @keyframes tumble-1 {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          25% {
            transform: translateY(-15px) rotateX(10deg) rotateY(-5deg);
          }
          50% {
            transform: translateY(5px) rotateX(-5deg) rotateY(10deg);
          }
          75% {
            transform: translateY(-5px) rotateX(5deg) rotateY(-5deg);
          }
        }
        @keyframes tumble-2 {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          20% {
            transform: translateY(-10px) rotateX(-8deg) rotateY(5deg);
          }
          40% {
            transform: translateY(8px) rotateX(12deg) rotateY(-8deg);
          }
          60% {
            transform: translateY(-5px) rotateX(-5deg) rotateY(5deg);
          }
          80% {
            transform: translateY(3px) rotateX(3deg) rotateY(-3deg);
          }
        }
        @keyframes tumble-3 {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          30% {
            transform: translateY(-12px) rotateX(15deg) rotateY(8deg);
          }
          60% {
            transform: translateY(8px) rotateX(-10deg) rotateY(-5deg);
          }
        }
        @keyframes tumble-4 {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          25% {
            transform: translateY(10px) rotateX(-12deg) rotateY(-8deg);
          }
          50% {
            transform: translateY(-8px) rotateX(5deg) rotateY(10deg);
          }
          75% {
            transform: translateY(5px) rotateX(-3deg) rotateY(-5deg);
          }
        }
        @keyframes tumble-5 {
          0%,
          100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          20% {
            transform: translateY(-8px) rotateX(10deg) rotateY(-10deg);
          }
          40% {
            transform: translateY(12px) rotateX(-15deg) rotateY(5deg);
          }
          60% {
            transform: translateY(-10px) rotateX(8deg) rotateY(-3deg);
          }
          80% {
            transform: translateY(5px) rotateX(-5deg) rotateY(8deg);
          }
        }
      `}</style>

      {/* Background effects - conditionally rendered for mobile optimization */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)]"></div>
      <StarsBackground className="z-0 opacity-60" />
      <ShootingStars className="z-0 fixed inset-0" />

      {/* Hero Section - Full Viewport Height */}
      <div
        className="w-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ minHeight: "calc(100vh - 0px)", marginTop: "-80px" }}
      >
        {/* Star effects for the hero section */}
        <Spotlight
          className="absolute top-0 left-0 md:left-60 w-full h-full"
          fill="rgba(59, 130, 246, 0.5)"
          darkModeFill="rgba(255, 255, 255, 0.3)"
        />

        <div
          className="md:mt-20 text-center z-20 relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <h1
              className={cn(
                "my-5 font-bold text-slate-900 dark:text-white relative z-20 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              )}
            >
              <TextGenerateEffect words={welcomeText} />
            </h1>
          </div>

          <div className="transform scale-110 sm:scale-125 md:scale-150 lg:scale-175 relative">
            <Cover className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl group transition-all duration-500 hover:scale-105">
              <span className="gusto-animated">
                <span>G</span>
                <span>U</span>
                <span>S</span>
                <span>T</span>
                <span>O</span>
              </span>
              <span className="inline-block align-top text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold -mt-3 text-amber-400 dark:text-amber-300 tracking-normal drop-shadow-md px-1 rounded bg-opacity-10 italic transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:text-amber-500 dark:group-hover:text-amber-200">
                25
              </span>
            </Cover>
          </div>

          <div className="mt-5 md:mt-7 lg:mt-9  ">
            <p className="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-500 tracking-wider uppercase mb-1">
              Proudly Presented By
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 dark:from-amber-200 dark:via-yellow-400 dark:to-orange-400 mb-1">
              Association of Information Technology
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Government College of Engineering, Erode
            </p>
          </div>

          <div className="mt-4 text-slate-700 dark:text-neutral-400 relative z-20 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            {aboutText}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" onClick={(e) => scrollToSection(e, "events")}>
              <MagicButton
                title="Registration open"
                icon={<FaArrowDown />}
                position="right"
                otherClasses="px-6 py-2 text-base font-bold bg-black border-blue-500/20"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Timer Section */}
      <div className="w-full dark:bg-rose-950/5 mt-10 mb-44">
        <CountdownTimer />
      </div>

      {/* Video Section - With optimized loading */}
      <div className="w-full mb-44">
        <GustoVideo />
      </div>

      {/* Events Section */}
      <div
        id="events"
        className="mt-8 sm:mt-12 md:mt-16 text-center w-full max-w-4xl mx-auto px-4"
      >
        <h2 className="relative text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Our Events
        </h2>

        <div className="mt-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <ExpandableEventCard events={allEvents} />
          )}
        </div>
      </div>

      <div className="mb-44 text-center">
        <Link href="/events" className="inline-block">
          <MagicButton
            title="View All Events"
            icon={<FaArrowRight className="h-5 w-5" />}
            position="right"
            otherClasses="px-8 py-3 text-lg font-bold bg-black border-blue-500/20"
          />
        </Link>
      </div>

      {/* TimeLine */}
      <EventsTimeline />

      {/* Google Map */}
      <GoogleMapComponent />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
