"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}) => {
  return (
    <div className="relative">
      {/* Clean button with no horizontal glow */}
      <button
        className={cn(
          "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-md font-bold",
          "px-6 py-3 text-base",
          "bg-black dark:bg-black",
          "text-white dark:text-white",
          "border border-blue-500/30 dark:border-blue-500/30",
          "animate-pulse-subtle",
          "transition-all duration-300",
          "hover:-translate-y-1 active:translate-y-0",
          otherClasses
        )}
        onClick={handleClick}
      >
        {position === "left" && <span className="mr-2">{icon}</span>}

        <span className="relative">{title}</span>

        {position === "right" && <span className="ml-2">{icon}</span>}

        {/* Subtle shimmer effect that loops automatically */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shimmer-auto"></span>
      </button>
    </div>
  );
};

export default MagicButton;
