"use client"

import type React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { MailIcon, Copyright } from "lucide-react";
import {
  RegistrationLink,
  gustoMail,
  instagram,
  youtube,
  Devak,
  Sabeshragav,
} from "@/data/AllData";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== "/") {
      // Store the target section in sessionStorage
      sessionStorage.setItem("scrollToSection", "contact");
      // Navigate to home page
      router.push("/");
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="w-full bg-neutral-950 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-1">
            <div className="mb-6 font-bold text-6xl">GUSTO &apos;25</div>
            <p className="text-lg mb-8 max-w-md">
              Igniting minds, inspiring innovation, and creating unforgettable
              moments at the premier symposium of Information Technology.
            </p>
            <div className="flex space-x-5 mb-8">
              <Link
                href={instagram}
                target="_blank"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href={`mailto:${gustoMail}`}
                target="_blank"
                aria-label="Email"
                className="hover:text-white transition-colors"
              >
                <MailIcon size={24} />
              </Link>
              <Link
                href={youtube}
                target="_blank"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Events Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Events</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/events#tech"
                  className="hover:text-white text-white/50 transition-colors"
                >
                  Technical Events
                </Link>
              </li>
              <li>
                <Link
                  href="/events#tech-ind"
                  className="hover:text-white text-white/50 transition-colors"
                >
                  Technical Individual Events
                </Link>
              </li>
              <li>
                <Link
                  href="/events#non-tech"
                  className="hover:text-white text-white/50 transition-colors"
                >
                  Non-Technical Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={RegistrationLink}
                  target="_blank"
                  className="hover:text-white text-white/50 transition-colors"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  onClick={handleContactClick}
                  className="hover:text-white text-white/50 transition-colors"
                >
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Developer */}
        <div className="border-t flex flex-col gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between border-gray-800 mt-16 pt-8">
          <p className="text-sm flex items-center">
            <Copyright className="h-4 w-4 mr-1 inline-block" /> Gusto 2025. All
            rights reserved.
          </p>
          <p className="text-sm">
            Site developed by{" "}
            <Link
              target="_blank"
              href={Devak}
              className="text-blue-500 transition-colors border-b border-blue-500"
            >
              Devak
            </Link>{" "}
            &{" "}
            <Link
              target="_blank"
              href={Sabeshragav}
              className="text-blue-500 transition-colors border-b border-blue-500"
            >
              Sabeshragav
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
