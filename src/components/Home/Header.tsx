"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/UI/shadcn/button";
import { BusFront, Calendar, Code2, Gamepad2, Menu, X, Home } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/UI/theme/theme-toggle";
import { useTheme } from "next-themes"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Technical Events",
    href: "/events#tech",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    name: "Technical Individual Events",
    href: "/events#tech-ind",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Non-Technical Events",
    href: "/events#non-tech",
    icon: <Gamepad2 className="h-5 w-5" />,
  },
  {
    name: "Bus Timings",
    href: "/BusRoutes",
    icon: <BusFront className="h-5 w-5" />,
  },
  {
    name: "Timeline",
    href: "#timeline",
    icon: <Calendar className="h-5 w-5" />,
  },
]

export default function Header() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const headerOffset = 100;

    // Pure anchor links on the same page (like #timeline)
    if (href.startsWith("#")) {
      e.preventDefault();
      
      // If we're not on the home page and trying to access timeline
      if (window.location.pathname !== "/" && href === "#timeline") {
        // Store the target section in sessionStorage
        sessionStorage.setItem("scrollToSection", "timeline");
        // Navigate to home page
        window.location.href = "/";
        return;
      }

      const element = document.getElementById(href.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth"
        });
      }
    } 
    // Page link with anchor (like /events#tech-ind)
    else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const normalizedPath = path || "/";
      const currentPath = window.location.pathname;
      
      // If we're already on the correct page
      if (currentPath === normalizedPath) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth"
          });
        }
      } else {
        // Store both the path and hash for cross-page navigation
        sessionStorage.setItem("navigationTarget", JSON.stringify({ 
          path: normalizedPath, 
          hash,
          headerOffset 
        }));
      }
    }
    
    setMobileMenuOpen(false);
  };

  // Handle initial scroll to hash when page loads
  useEffect(() => {
    const handleStoredNavigation = () => {
      const storedNavigation = sessionStorage.getItem("navigationTarget");
      if (storedNavigation) {
        try {
          const { path, hash, headerOffset } = JSON.parse(storedNavigation);
          
          // Only process if we're on the correct path
          if (path === window.location.pathname) {
            // Use a longer timeout to ensure content is fully loaded
            setTimeout(() => {
              const element = document.getElementById(hash);
              if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - headerOffset,
                  behavior: "smooth"
                });
              }
              // Clear the stored navigation after processing
              sessionStorage.removeItem("navigationTarget");
            }, 500);
          }
        } catch (error) {
          console.error("Error processing stored navigation:", error);
          sessionStorage.removeItem("navigationTarget");
        }
      }
    };

    // Handle both initial load and subsequent navigations
    handleStoredNavigation();
    window.addEventListener("load", handleStoredNavigation);
    
    return () => {
      window.removeEventListener("load", handleStoredNavigation);
    };
  }, []);

  const currentTheme = mounted ? theme : "dark"

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
                    src={currentTheme === "dark" ? "/logos/AIT/gold.png" : "/logos/AIT/silver.png"}
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
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className={cn(
                      "relative h-full flex items-center px-4",
                      "text-base font-semibold",
                      "text-gray-800 dark:text-gray-200",
                      "hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300",
                      scrolled
                        ? "hover:bg-white/20 dark:hover:bg-gray-800/20"
                        : "hover:bg-white/10 dark:hover:bg-white/5",
                      "group"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span className="whitespace-nowrap">{item.name}</span>
                    </span>
                    <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200/50 dark:bg-gray-700/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
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
              <nav className={cn(
                "border-t border-gray-200/5 dark:border-gray-800/5",
                scrolled
                  ? "bg-white/30 dark:bg-black/30 backdrop-blur-sm"
                  : "bg-white/40 dark:bg-black/40"
              )}>
                <div className="container mx-auto px-4 py-2 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavigation(e, item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg",
                          "text-base font-medium text-gray-800 dark:text-gray-200",
                          scrolled
                            ? "hover:bg-white/20 dark:hover:bg-gray-800/20"
                            : "hover:bg-white/10 dark:hover:bg-white/5",
                          "transition-all duration-200"
                        )}
                      >
                        <span className="text-gray-600 dark:text-gray-300">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}

