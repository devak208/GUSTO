"use client";

import { ReactNode } from "react";
import ScrollToSection from "./ScrollToSection";

interface ScrollToTimelineProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  sectionId?: string;
}

const ScrollToTimeline = ({
  children,
  className = "",
  onClick,
  sectionId = "timeline", // Default is "timeline"
}: ScrollToTimelineProps) => {
  return (
    <ScrollToSection
      targetPage="/"
      sectionId={sectionId}
      className={className}
      onClick={onClick}
      useHashInUrl={false} // Using sessionStorage approach for homepage
    >
      {children}
    </ScrollToSection>
  );
};

export default ScrollToTimeline;
