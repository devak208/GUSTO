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
  isClosed,
} from "@/data/AllData";
import ScrollToContact from "@/components/UI/scroll/ScrollToContact";
import ScrollToEvent from "@/components/UI/scroll/ScrollToEvent";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-300 py-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] dark:shadow-none border-t border-gray-200 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 font-bold text-4xl sm:text-6xl">
              GUSTO ' 25
            </div>
            <p className="text-sm sm:text-lg mb-8 max-w-md text-gray-600 dark:text-neutral-400">
              Igniting minds, inspiring innovation, and creating unforgettable
              moments at the premier symposium of Information Technology.
            </p>
            <div className="flex space-x-5 mb-8">
              <Link
                href={instagram}
                target="_blank"
                aria-label="Instagram"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={`mailto:${gustoMail}`}
                target="_blank"
                aria-label="Email"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                <MailIcon size={20} />
              </Link>
              <Link
                href={youtube}
                target="_blank"
                aria-label="YouTube"
                className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Events Column */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 pb-2 border-b border-gray-200 dark:border-neutral-800">
              Events
            </h3>
            <ul className="space-y-4">
              <li>
                <ScrollToEvent
                  eventType="tech"
                  className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Technical Events
                </ScrollToEvent>
              </li>
              <li>
                <ScrollToEvent
                  eventType="tech-ind"
                  className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Technical Individual Events
                </ScrollToEvent>
              </li>
              <li>
                <ScrollToEvent
                  eventType="non-tech"
                  className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Non-Technical Events
                </ScrollToEvent>
              </li>
            </ul>
          </div>

          {/* Participants Column */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 pb-2 border-b border-gray-200 dark:border-neutral-800">
              Participants
            </h3>
            <ul className="space-y-4">
              <li>
                {isClosed ? (
                  <div className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                    Registration Form
                  </div>
                ) : (
                  <Link
                    href={RegistrationLink}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    Registration Form
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* About and Resources Columns */}
          <div>
            <div className="mb-8">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 pb-2 border-b border-gray-200 dark:border-neutral-800">
                About
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/committee"
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    Committee
                  </Link>
                </li>

                <li>
                  <ScrollToContact className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    Contact Us
                  </ScrollToContact>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6 pb-2 border-b border-gray-200 dark:border-neutral-800">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                    Lunch & Refreshments
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Developer */}
        <div className="border-t border-gray-200 dark:border-neutral-800 flex flex-col gap-10 sm:gap-0 sm:flex-row sm:items-center sm:justify-between mt-16 pt-8">
          <p className="text-sm flex items-center text-gray-600 dark:text-gray-400">
            <Copyright className="h-4 w-4 mr-1 inline-block" /> Gusto 2025. All
            rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Site developed by{" "}
            <Link
              target="_blank"
              href={Devak}
              className="border-b border-blue-700 text-blue-700 dark:text-blue-400 transition-colors hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              Devak
            </Link>{" "}
            &{" "}
            <Link
              target="_blank"
              href={Sabeshragav}
              className="border-b border-blue-700 text-blue-700 dark:text-blue-400 transition-colors hover:text-blue-800 dark:hover:text-blue-300 font-medium"
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
