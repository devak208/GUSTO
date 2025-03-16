"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/UI/aceternity/text-generate-effect";
import { Cover } from "@/components/UI/aceternity/cover";
import MagicButton from "@/components/UI/aceternity/MagicButton";
import { Banner } from "@/components/Events/Banner";
import { getAllEvents } from "@/lib/events";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { ExpandableEventCard } from "@/components/Events/ExpandableEventCard";
import { Spotlight } from "@/components/UI/aceternity/spotlight";
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";

export default function Home() {
  const words = `Welcome to our GCEE`;
  const allEvents = getAllEvents();

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
        // This makes the scroll animation slower
      });
    }
  };

  return (
    <div className="relative w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)]"></div>
      <StarsBackground className="z-0 opacity-60" />
      <ShootingStars className="z-0 fixed inset-0" />
      {/* Hero Section - Full Viewport Height */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Star effects for the hero section */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(59, 130, 246, 0.5)"
          darkModeFill="white"
        />

        <div className="text-center z-20 relative w-full max-w-4xl mx-auto px-4">
          <h1
            className={cn(
              "font-extrabold text-slate-900 dark:text-white relative z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            )}
          >
            <TextGenerateEffect words={words} />
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-10 transform scale-110 sm:scale-125 md:scale-135 lg:scale-150 relative">
            <Cover className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl group transition-all duration-500 hover:scale-105">
              <span className="inline-block transition-all duration-700 ease-in-out group-hover:scale-110">
                GUSTO
              </span>
              <span className="inline-block align-top text-sm sm:text-base md:text-lg lg:text-xl font-extrabold -mt-2 text-amber-400 dark:text-amber-300 tracking-normal drop-shadow-md px-1 rounded bg-opacity-10 italic transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:text-amber-500 dark:group-hover:text-amber-200">
                25
              </span>
            </Cover>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-slate-700 dark:text-neutral-300 relative z-20 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            nobis? Vero fugit, quidem libero blanditiis modi aut ab quo nisi
            ipsam ratione cum et sit illo deleniti odio nostrum similique.
          </div>

          <div className="mt-10 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" onClick={(e) => scrollToSection(e, "events")}>
              <MagicButton
                title="Registeration open"
                icon={<FaArrowDown />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Content below the fold */}
      <div className="w-full">
        <Banner />

        {/* Events Section */}
        <div
          id="events"
          className="mt-8 sm:mt-12 md:mt-16 text-center w-full max-w-4xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Our Events
          </h2>

          <div className="mt-8">
            <ExpandableEventCard events={allEvents} />
           
          </div>

          <div className="mt-8 text-center mb-16">
            <Link href="/events" className="inline-block">
              <MagicButton
                title="View All Events"
                icon={null}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
