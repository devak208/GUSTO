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
    const headerOffset = 100; // Account for fixed header height

    // Pure anchor links on the same page
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth"
        });
      }
    } 
    // Page link with anchor (like /events#tech-ind)
    else if (href.includes("#")) {
      // Only handle scroll if we're already on the correct page
      if (window.location.pathname === href.split("#")[0]) {
        e.preventDefault()
        const anchorId = href.split("#")[1]
        const element = document.getElementById(anchorId)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth"
          });
        }
      }
    }
    
    setMobileMenuOpen(false)
  }

  const currentTheme = mounted ? theme : "dark"

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <header
        className={cn(
          "transition-all duration-500 w-full border-b",
          scrolled || mobileMenuOpen
            ? "bg-white dark:bg-black border-gray-200/50 dark:border-gray-800/50 shadow-md"
            : "bg-transparent border-transparent",
        )}
      >
        {/* Accent line at top */}
        <div className="h-1 w-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />

        <nav className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo section with animation */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {mounted && (
              <Link href="/" className="relative group">
                <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800 scale-0 group-hover:scale-110 transition-transform duration-300" />
                <Image
                  src={currentTheme === "dark" ? "/logos/AIT/gold.png" : "/logos/AIT/silver.png"}
                  alt="AIT Logo"
                  width={100}
                  height={100}
                  className="w-[45px] h-auto sm:w-[55px] md:w-[65px] transition-all duration-300 relative z-10"
                  priority
                />
              </Link>
            )}
          </motion.div>

          {/* Desktop navigation with animations */}
          <div className="hidden lg:flex lg:gap-x-1 xl:gap-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={cn(
                    "relative text-sm xl:text-base font-semibold text-gray-800 dark:text-gray-200",
                    "hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300",
                    "flex items-center gap-2 py-2 px-3 rounded-md",
                    "hover:bg-gray-100/70 dark:hover:bg-gray-800/70",
                    "group overflow-hidden",
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right section with theme toggle and mobile menu */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 h-full">
            {/* Theme toggle with animation */}
            <motion.div
              className="flex items-center justify-center h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-10 h-10">
                {mounted && <ThemeToggle />}
              </div>
            </motion.div>

            {/* Mobile menu button with animation */}
            <motion.div
              className="lg:hidden relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "transition-all duration-300",
                  "border-gray-200 dark:border-gray-800",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "hover:border-gray-300 dark:hover:border-gray-700",
                  mobileMenuOpen && "bg-gray-100 dark:bg-gray-800",
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
                      <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile menu with improved animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                <div className="flex flex-col space-y-1 p-3 max-h-[calc(100vh-84px)] overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200",
                          "hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200",
                          "border border-transparent hover:border-gray-200 dark:hover:border-gray-700",
                        )}
                      >
                        <span className="text-gray-600 dark:text-gray-300">{item.icon}</span>
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  )
}

