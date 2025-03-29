import { motion } from "framer-motion";
import { CardSpotlight } from "../UI/aceternity/card-spotlight";
import { gustoMail } from "@/data/AllData";
import { Event } from "@/lib/events";

interface EventCoordinatorsProps {
  event: Event;
}

export default function EventCoordinators({ event }: EventCoordinatorsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-8 mb-12 relative z-10"
    >
      <CardSpotlight
        className="w-full bg-white dark:bg-neutral-950"
        radius={500}
        color="#262626"
      >
        <p className="text-2xl font-bold relative z-20 text-slate-900 dark:text-white mb-4">
          Event Coordinators
        </p>
        {event.coordinator1 && event.coordinator2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 relative z-20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-neutral-900 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Ayyanar S
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">
                    Final Year Coordinator
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +91 9363446454
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-neutral-900 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Sanjay Kanth C
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">
                    Pre-Final Year Coordinator
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +91 7904546645
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-neutral-900 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {event.coordinator1.name}
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">
                    Final Year Coordinator
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {event.coordinator1.phone}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-neutral-900 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {event.coordinator2.name}
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">
                    Pre-Final Year Coordinator
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {event.coordinator2.phone}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 relative z-20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-neutral-900 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Contact Email
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm">
                    For any queries related to the event
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                      <a
                        href={`mailto:${gustoMail}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {gustoMail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <p className="text-slate-600 dark:text-neutral-300 mt-6 relative z-20 text-sm border-t border-gray-100 dark:border-neutral-800 pt-4">
          Reach out to any of the coordinators for queries regarding
          registration, rules, or any other event-related information.
        </p>
      </CardSpotlight>
    </motion.div>
  );
}
