"use client";

import { Phone } from "lucide-react";
import ScrollToContact from "./ScrollToContact";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "text";
  label?: string;
  showIcon?: boolean;
}

const ContactButton = ({
  className = "",
  variant = "primary",
  label = "Contact Us",
  showIcon = true,
}: ContactButtonProps) => {
  // Base classes for all variants
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant specific classes
  const variantClasses = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 focus:ring-blue-500",
    secondary:
      "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 focus:ring-gray-400",
    text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline focus:ring-blue-400 px-2 py-1",
  };

  return (
    <ScrollToContact
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {label}
    </ScrollToContact>
  );
};

export default ContactButton;
