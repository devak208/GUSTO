"use client";

import { ReactNode } from "react";
import ScrollToSection from "./ScrollToSection";

interface ScrollToContactProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollToContact = ({
  children,
  className = "",
  onClick,
}: ScrollToContactProps) => {
  return (
    <ScrollToSection
      targetPage="/"
      sectionId="contact"
      className={className}
      onClick={onClick}
    >
      {children}
    </ScrollToSection>
  );
};

export default ScrollToContact;
