"use client";

import { ReactNode } from "react";
import ScrollToSection from "./ScrollToSection";

interface ScrollToEventProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  eventType: "tech" | "tech-ind" | "non-tech"; // Types of event sections
}

const ScrollToEvent = ({
  children,
  className = "",
  onClick,
  eventType,
}: ScrollToEventProps) => {
  // Add a specific click handler for event links
  const handleEventClick = () => {
    // Add any additional event-specific handling here if needed
    if (onClick) onClick();
  };

  return (
    <ScrollToSection
      targetPage="/events"
      sectionId={eventType}
      className={className}
      onClick={handleEventClick}
      useHashInUrl={true} // Use hash navigation for events page
    >
      {children}
    </ScrollToSection>
  );
};

export default ScrollToEvent;
