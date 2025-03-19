import type React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { RegistrationLink } from "@/data/AllData";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-950 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 font-bold text-6xl">GUSTO ' 25</div>
            <p className="text-lg mb-8 max-w-md">
              Igniting minds, inspiring innovation, and creating unforgettable
              moments at the premier symposium of Information Technology.
            </p>
            <div className="flex space-x-5 mb-8">
              <Link
                href="#"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="#"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <MailIcon size={24} />
              </Link>

              <Link
                href="#"
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

          {/* Participants Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Participants</h3>
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

              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-white text-white/50 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* About and Resources Columns */}
          <div>
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-6">About</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white text-white/50 transition-colors"
                  >
                    Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white text-white/50 transition-colors"
                  >
                    Venue
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white text-white/50 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white text-white/50 transition-colors"
                  >
                    Media Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white text-white/50 transition-colors"
                  >
                    Lunch & Refreshments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Developer */}
        <div className="border-t flex flex-col gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between border-gray-800 mt-16 pt-8">
          <p className="text-sm">© Gusto 2025. All rights reserved.</p>
          <p className="text-sm">
            Site developed by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/devak-c-k-b53a73308"
              className="text-blue-500 transition-colors border-b border-blue-500"
            >
              Devak
            </Link>{" "}
            &{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sabeshragavgk"
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
