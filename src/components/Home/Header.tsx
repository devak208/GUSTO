"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/UI/shadcn/button";
import { BusFront, Calendar, Menu, X, Home } from "lucide-react";
import { GrGroup } from "react-icons/gr";
import { GoTrophy } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/UI/theme/theme-toggle";
import { useTheme } from "next-themes";
import ScrollToEvent from "@/components/UI/scroll/ScrollToEvent";
import ScrollToTimeline from "@/components/UI/scroll/ScrollToTimeline";

// Define navigation items for rendering
const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
    isCustomNav: false,
  },
  {
    name: "Technical Events",
    eventType: "tech", // For ScrollToEvent
    icon: <GrGroup className="h-5 w-5" />,
    isCustomNav: true,
    navType: "event",
  },
  {
    name: "Technical Individual Events",
    eventType: "tech-ind", // For ScrollToEvent
    icon: <FiUser className="h-5 w-5" />,
    isCustomNav: true,
    navType: "event",
  },
  {
    name: "Non-Technical Events",
    eventType: "non-tech", // For ScrollToEvent
    icon: <GoTrophy className="h-5 w-5" />,
    isCustomNav: true,
    navType: "event",
  },
  {
    name: "Bus Timings",
    href: "/BusRoutes",
    icon: <BusFront className="h-5 w-5" />,
    isCustomNav: false,
  },
  {
    name: "Timeline",
    icon: <Calendar className="h-5 w-5" />,
    isCustomNav: true,
    navType: "timeline",
  },
];

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For handling regular link clicks
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const currentTheme = mounted ? theme : "dark";

  // Render navigation item based on its type
  const renderNavItem = (
    item: (typeof navItems)[0],
    index: number,
    isMobile: boolean = false
  ) => {
    const baseClasses = isMobile
      ? cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg",
          "text-base font-medium text-gray-800 dark:text-gray-200",
          scrolled
            ? "hover:bg-white/20 dark:hover:bg-gray-800/20"
            : "hover:bg-white/10 dark:hover:bg-white/5",
          "transition-all duration-200"
        )
      : cn(
          "relative h-full flex items-center px-4",
          "text-base font-semibold",
          "text-gray-800 dark:text-gray-200",
          "hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300",
          scrolled
            ? "hover:bg-white/20 dark:hover:bg-gray-800/20"
            : "hover:bg-white/10 dark:hover:bg-white/5",
          "group"
        );

    // Render based on navigation type
    if (!item.isCustomNav) {
      // Regular Link
      return (
        <Link
          href={item.href || "/"}
          onClick={handleLinkClick}
          className={baseClasses}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
          </span>
          {!isMobile && (
            <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200/50 dark:bg-gray-700/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          )}
        </Link>
      );
    } else if (item.navType === "event") {
      // Event Navigation
      return (
        <ScrollToEvent
          eventType={item.eventType as "tech" | "tech-ind" | "non-tech"}
          className={baseClasses}
          onClick={handleLinkClick}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
          </span>
          {!isMobile && (
            <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200/50 dark:bg-gray-700/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          )}
        </ScrollToEvent>
      );
    } else if (item.navType === "timeline") {
      // Timeline Navigation
      return (
        <ScrollToTimeline className={baseClasses} onClick={handleLinkClick}>
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
          </span>
          {!isMobile && (
            <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200/50 dark:bg-gray-700/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          )}
        </ScrollToTimeline>
      );
    }

    // Fallback for any unexpected case
    return null;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header
        className={cn(
          "transition-all duration-500 w-full",
          scrolled || mobileMenuOpen
            ? "bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-sm "
            : " h-20 bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-sm "
        )}
      >
        {/* Accent line at top */}
        {/*         <div className="h-px w-full bg-gradient-to-r from-gray-200/10 via-gray-300/10 to-gray-200/10 dark:from-gray-800/10 dark:via-gray-700/10 dark:to-gray-800/10 bg-blue-600" /> */}

        <nav className="container mx-auto h-20 px-4 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo section with animation */}
            <motion.div
              className="flex items-center h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {mounted && (
                <Link href="/" className="relative group flex items-center">
                  <div className="absolute inset-0 rounded-full bg-gray-100/5 dark:bg-gray-800/5 scale-0 group-hover:scale-110 transition-transform duration-300" />
                  <Image
                    src={
                      currentTheme === "dark"
                        ? "/logos/AIT/gold.png"
                        : "/logos/AIT/silver.png"
                    }
                    alt="AIT Logo"
                    width={100}
                    height={100}
                    className="w-[60px] h-auto transition-all duration-300 relative z-10"
                    priority
                  />
                </Link>
              )}
            </motion.div>

            {/* Desktop navigation with animations */}
            <div className="hidden lg:flex lg:items-center h-full lg:gap-x-1 xl:gap-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="h-full flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {renderNavItem(item, index)}
                </motion.div>
              ))}
            </div>

            {/* Right section with theme toggle and mobile menu */}
            <div className="flex items-center h-full gap-2">
              {/* Theme toggle with animation */}
              <motion.div
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-center w-10 h-10">
                  {mounted && <ThemeToggle />}
                </div>
              </motion.div>

              {/* Mobile menu button */}
              <motion.div
                className="lg:hidden flex items-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={cn(
                    "transition-all duration-300",
                    scrolled
                      ? "hover:bg-white/20 dark:hover:bg-gray-800/20"
                      : "hover:bg-white/10 dark:hover:bg-white/5"
                  )}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <nav
                className={cn(
                  "border-t border-gray-200/5 dark:border-gray-800/5",
                  scrolled
                    ? "bg-white/30 dark:bg-black/30 backdrop-blur-sm"
                    : "bg-white/40 dark:bg-black/40"
                )}
              >
                <div className="container mx-auto px-4 py-2 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {renderNavItem(item, index, true)}
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
