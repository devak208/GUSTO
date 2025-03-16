"use client"



import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "@/components/UI/aceternity/text-generate-effect"
import { Cover } from "@/components/UI/aceternity/cover"
import MagicButton from "@/components/UI/aceternity/MagicButton"
import { getAllEvents } from "@/lib/events"
import Link from "next/link"
import { FaArrowDown, FaArrowRight } from "react-icons/fa"
import { ExpandableEventCard } from "@/components/Events/ExpandableEventCard"
import { Spotlight } from "@/components/UI/aceternity/spotlight"
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars"
import { StarsBackground } from "@/components/UI/aceternity/stars-background"
import type { Event } from "@/lib/events"
import CountdownTimer from "@/components/Home/CountdownTimer"
import GustoVideo from "@/components/Home/GustoVideo"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Footer from "@/components/Home/Footer";
import EventsTimeline from "@/components/Home/EventsTimeline";

// Custom hook for animations
function useAnimateInView(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return {
    ref,
    variants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom ease curve for smooth animation
      delay,
    },
  }
}

export default function HomePage() {
  const { theme } = useTheme()
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Animation props for different sections
  const welcomeAnimation = useAnimateInView(0.1)
  const gustoAnimation = useAnimateInView(0.3)
  const aboutAnimation = useAnimateInView(0.5)
  const buttonAnimation = useAnimateInView(0.7)
  const timerAnimation = useAnimateInView(0.1)
  const videoAnimation = useAnimateInView(0.1)
  const eventsHeaderAnimation = useAnimateInView(0.1)
  const eventsAnimation = useAnimateInView(0.3)
  const viewAllAnimation = useAnimateInView(0.5)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await getAllEvents()
        setAllEvents(events)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching events:", error)
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Only run on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const welcomeText = `Welcome to our GCEE`
  const aboutText = `Join us at GUSTO 2025 for a celebration of innovation and talent!
            Experience workshops, competitions, and networking with industry
            leaders. Something amazing awaits every participant!`

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`relative w-full ${mounted && theme === "dark" ? "dark" : "light"} dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center`}
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
  .gusto-animated span:nth-child(1) { animation-name: tumble-1; animation-delay: 0.0s; }
  .gusto-animated span:nth-child(2) { animation-name: tumble-2; animation-delay: 0.1s; }
  .gusto-animated span:nth-child(3) { animation-name: tumble-3; animation-delay: 0.2s; }
  .gusto-animated span:nth-child(4) { animation-name: tumble-4; animation-delay: 0.3s; }
  .gusto-animated span:nth-child(5) { animation-name: tumble-5; animation-delay: 0.4s; }

  /* Light theme - Black with white glow */
  :global(.light) .gusto-animated span {
    color: #000000; /* Black text */
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.7),
      0 0 20px rgba(255, 255, 255, 0.5),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(255, 255, 255, 0.3);
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
    font-weight: 700;
  }

  /* Dark theme - Yellow glow */
  :global(.dark) .gusto-animated span {
    color: #FFD700; /* Yellow/gold color */
    text-shadow: 
      0 0 10px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 215, 0, 0.3),
      0 0 30px rgba(255, 215, 0, 0.2);
    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
  }

        @keyframes tumble-1 {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          25% { transform: translateY(-15px) rotateX(10deg) rotateY(-5deg); }
          50% { transform: translateY(5px) rotateX(-5deg) rotateY(10deg); }
          75% { transform: translateY(-5px) rotateX(5deg) rotateY(-5deg); }
        }
        @keyframes tumble-2 {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          20% { transform: translateY(-10px) rotateX(-8deg) rotateY(5deg); }
          40% { transform: translateY(8px) rotateX(12deg) rotateY(-8deg); }
          60% { transform: translateY(-5px) rotateX(-5deg) rotateY(5deg); }
          80% { transform: translateY(3px) rotateX(3deg) rotateY(-3deg); }
        }
        @keyframes tumble-3 {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          30% { transform: translateY(-12px) rotateX(15deg) rotateY(8deg); }
          60% { transform: translateY(8px) rotateX(-10deg) rotateY(-5deg); }
        }
        @keyframes tumble-4 {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          25% { transform: translateY(10px) rotateX(-12deg) rotateY(-8deg); }
          50% { transform: translateY(-8px) rotateX(5deg) rotateY(10deg); }
          75% { transform: translateY(5px) rotateX(-3deg) rotateY(-5deg); }
        }
        @keyframes tumble-5 {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          20% { transform: translateY(-8px) rotateX(10deg) rotateY(-10deg); }
          40% { transform: translateY(12px) rotateX(-15deg) rotateY(5deg); }
          60% { transform: translateY(-10px) rotateX(8deg) rotateY(-3deg); }
          80% { transform: translateY(5px) rotateX(-5deg) rotateY(8deg); }
        }
      `}</style>

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
          <motion.div {...welcomeAnimation}>
            <h1
              className={cn("font-bold text-slate-900 dark:text-white relative z-20 text-5xl md:text-6xl lg:text-7xl")}
            >
              <TextGenerateEffect words={welcomeText} />
            </h1>
          </motion.div>

          <motion.div
            {...gustoAnimation}
            className="mt-6 sm:mt-8 md:mt-10 transform scale-125 sm:scale-135 md:scale-150 lg:scale-160 relative"
          >
            <Cover className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl group transition-all duration-500 hover:scale-105">
              <span className="gusto-animated">
                <span>G</span>
                <span>U</span>
                <span>S</span>
                <span>T</span>
                <span>O</span>
              </span>
              <span className="inline-block align-top text-base sm:text-base md:text-lg lg:text-xl font-extrabold -mt-2 text-amber-400 dark:text-amber-300 tracking-normal drop-shadow-md px-1 rounded bg-opacity-10 italic transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:text-amber-500 dark:group-hover:text-amber-200">
                25
              </span>
            </Cover>
          </motion.div>

          <motion.div
            {...aboutAnimation}
            className="mt-8 px-4 sm:px-0 sm:mt-10 md:mt-12 text-slate-700 dark:text-neutral-400 relative z-20 text-xs sm:text-base md:text-xl max-w-3xl mx-auto"
          >
            {aboutText}
          </motion.div>

          <motion.div
            {...buttonAnimation}
            className="mt-10 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#events" onClick={(e) => scrollToSection(e, "events")}>
              <MagicButton
                title="Registeration open"
                icon={<FaArrowDown />}
                position="right"
                otherClasses="px-8 py-3 text-lg font-bold bg-black border-blue-500/20"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Timer Section */}
      <motion.div {...timerAnimation} className="w-full dark:bg-rose-950/5 mt-10 mb-44">
        <CountdownTimer />
      </motion.div>

      {/* Video Section */}
      <motion.div {...videoAnimation} className="w-full mb-44">
        <GustoVideo />
      </motion.div>

      {/* Events Section */}
      <div id="events" className="mt-8 sm:mt-12 md:mt-16 text-center w-full max-w-4xl mx-auto px-4">
        <motion.h2
          {...eventsHeaderAnimation}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center"
        >
          Our Events
        </motion.h2>

        <motion.div {...eventsAnimation} className="mt-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <ExpandableEventCard events={allEvents} />
          )}
        </motion.div>
      </div>

      <motion.div {...viewAllAnimation} className="mb-44 text-center">
        <Link href="/events" className="inline-block">
          <MagicButton
            title="View All Events"
            icon={<FaArrowRight className="h-5 w-5" />}
            position="right"
            otherClasses="px-8 py-3 text-lg font-bold bg-black border-blue-500/20"
          />
        </Link>
      </motion.div>
            {/* TimeLine */}
            <div className="w-full mb-44">
        <EventsTimeline />
      </div>

      {/* Footer */}
      <div className="w-full relative">
        <Footer />
      </div>

    </div>
  )
}
