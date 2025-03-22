"use client";

import { useState, useEffect } from "react";
import ScrollToEvent from "./ScrollToEvent";

const EventNavTester = () => {
  const [currentHash, setCurrentHash] = useState("");

  // Update current hash whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateHash = () => {
        setCurrentHash(window.location.hash);
      };

      // Initial hash
      updateHash();

      // Listen for hash changes
      window.addEventListener("hashchange", updateHash);

      return () => {
        window.removeEventListener("hashchange", updateHash);
      };
    }
  }, []);

  // Function to directly navigate to section (alternative method)
  const directNavigate = (sectionId: string) => {
    if (typeof window !== "undefined") {
      // Set the hash
      window.location.hash = sectionId;
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Event Navigation Test
      </h2>

      <div className="flex flex-col space-y-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Component Navigation (ScrollToEvent)
        </h3>

        <div className="flex space-x-4">
          <ScrollToEvent
            eventType="tech"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Technical Events
          </ScrollToEvent>

          <ScrollToEvent
            eventType="tech-ind"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Technical Individual Events
          </ScrollToEvent>

          <ScrollToEvent
            eventType="non-tech"
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
          >
            Non-Technical Events
          </ScrollToEvent>
        </div>
      </div>

      <div className="flex flex-col space-y-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Direct Navigation (window.location.hash)
        </h3>

        <div className="flex space-x-4">
          <button
            onClick={() => directNavigate("tech")}
            className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Direct to Tech
          </button>

          <button
            onClick={() => directNavigate("tech-ind")}
            className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors"
          >
            Direct to Tech Ind
          </button>

          <button
            onClick={() => directNavigate("non-tech")}
            className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors"
          >
            Direct to Non-Tech
          </button>
        </div>
      </div>

      <div className="mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Current hash: {currentHash || "none"}
        </p>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded">
        <p>This component tests the event navigation:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            When already on events page: Should scroll smoothly to the section
          </li>
          <li>
            When on another page: Should navigate to the events page with
            correct hash
          </li>
          <li>Should update URL hash without full page refresh</li>
          <li>
            If the component method fails, try the direct navigation buttons
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventNavTester;
