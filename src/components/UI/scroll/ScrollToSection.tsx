"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ScrollToSectionProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  targetPage: string; // The page to navigate to (e.g., "/", "/events")
  sectionId: string; // The ID of the section to scroll to
  useHashInUrl?: boolean; // Whether to use hash navigation (#) in URL
}

const ScrollToSection = ({
  children,
  className = "",
  onClick,
  targetPage,
  sectionId,
  useHashInUrl = false,
}: ScrollToSectionProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = (id: string) => {
    // Try to find the element a few times with increasing delays
    // This helps with elements that might not be immediately available
    const attemptScroll = (attempts = 0) => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
        return true;
      } else if (attempts < 5) {
        // Increase max attempts
        // Try a few more times with increasing delays
        setTimeout(() => attemptScroll(attempts + 1), 200 * (attempts + 1)); // Longer delays
        return false;
      }

      return false;
    };

    // Start the scroll attempts
    attemptScroll();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Execute additional onClick handler if provided
    if (onClick) onClick();

    if (pathname === targetPage) {
      // Already on target page, use native URL hash navigation
      if (useHashInUrl) {
        // Update the URL hash
        const oldHash = window.location.hash;
        const newHash = `#${sectionId}`;

        // Only update if the hash is different
        if (oldHash !== newHash) {
          // Update the URL hash - this will trigger the page's hash change handlers
          window.location.hash = sectionId;

          // Note: The page's own hash change handler should handle the scrolling,
          // but we'll also try to scroll directly as a fallback
          setTimeout(() => scrollToElement(sectionId), 100);
        } else {
          // If the hash is already correct, just scroll to the element
          scrollToElement(sectionId);
        }
      } else {
        // For non-hash navigation, just scroll to the element
        scrollToElement(sectionId);
      }
    } else {
      if (useHashInUrl) {
        // Navigate to page with hash
        router.push(`${targetPage}#${sectionId}`);
      } else {
        // Store target section in sessionStorage for pages that use that approach
        sessionStorage.setItem("scrollToSection", sectionId);
        router.push(targetPage);
      }
    }
  };

  return (
    <a
      href={useHashInUrl ? `${targetPage}#${sectionId}` : `${targetPage}`}
      onClick={handleClick}
      className={className}
      aria-label={`Navigate to ${sectionId} section`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
        }
      }}
    >
      {children}
    </a>
  );
};

export default ScrollToSection;
