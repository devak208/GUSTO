"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, {
  MouseEvent as ReactMouseEvent,
  useState,
  useEffect,
} from "react";
import { CanvasRevealEffect } from "@/components/UI/aceternity/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Always compute the mask image regardless of dark mode to maintain hooks order
  const maskImage = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  useEffect(() => {
    // Check if dark mode is active
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Optional: Listen for changes in dark mode
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    if (!isDarkMode) return;

    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => isDarkMode && setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border bg-black dark:border-neutral-800 shadow-xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Always render the motion.div but conditionally show it */}
      <motion.div
        className={`pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 ${
          isDarkMode ? "group-hover/spotlight:opacity-100" : ""
        }`}
        style={{
          backgroundColor: color,
          maskImage: maskImage,
          opacity: isDarkMode ? undefined : 0,
          pointerEvents: isDarkMode ? undefined : "none",
        }}
      >
        {isHovering && isDarkMode && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};
