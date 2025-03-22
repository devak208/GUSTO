"use client";

import { ReactNode } from "react";
import ScrollToSection from "./ScrollToSection";

interface ScrollToTimelineProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollToTimeline = ({
  children,
  className = "",
  onClick,
}: ScrollToTimelineProps) => {
  return (
    <ScrollToSection
      targetPage="/"
      sectionId="timeline"
      className={className}
      onClick={onClick}
      useHashInUrl={false} // Using sessionStorage approach for homepage
    >
      {children}
    </ScrollToSection>
  );
};

export default ScrollToTimeline;
