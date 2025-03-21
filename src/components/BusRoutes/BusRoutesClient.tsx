"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bus, Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/UI/shadcn/badge";
import { cn } from "@/lib/utils";
import { StarsBackground } from "@/components/UI/aceternity/stars-background";
import { ShootingStars } from "@/components/UI/aceternity/shooting-stars";
import { Spotlight } from "@/components/UI/aceternity/spotlight";
import { busRoutes } from "@/data/BusTiming";

const getBusTypeColor = (type: string) => {
  if (type.toLowerCase().includes("blue"))
    return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  if (type.toLowerCase().includes("town"))
    return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  if (type.toLowerCase().includes("yellow"))
    return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  if (type.startsWith("B"))
    return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
};

export default function BusRoutesClient() {
  const [searchTerm] = useState("");
  const [activeTab] = useState("all");

  const filteredRoutes = busRoutes.filter((route) => {
    const matchesSearch =
      searchTerm === "" ||
      route.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.stopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.buses.some(
        (bus) =>
          bus.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bus.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "erode")
      return matchesSearch && route.location === "Erode Bus Stand";
    if (activeTab === "bhavani")
      return matchesSearch && route.location === "Bhavani";
    if (activeTab === "chithode")
      return matchesSearch && route.location === "Chithode";

    return matchesSearch;
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2] flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)]"></div>
      <StarsBackground className="z-0 opacity-20 dark:opacity-60" />
      <ShootingStars className="z-0 fixed inset-0" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.3)"
        darkModeFill="white"
      />

      <main className="container mx-auto px-4 py-12 mt-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Campus Bus Routes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the perfect bus route to get to campus on time. We&apos;ve
            compiled all the routes and schedules for your convenience.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white/90 dark:bg-black/90 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            From {route.location}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <span>To:</span>
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {route.stopName}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock
                            size={16}
                            className="text-gray-500 dark:text-gray-400"
                          />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowRight
                            size={16}
                            className="text-gray-500 dark:text-gray-400"
                          />
                          <span>{route.distance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {route.buses.map((bus, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3 sm:mb-0">
                            <div className="bg-gray-50 dark:bg-gray-800/30 p-2 rounded-full">
                              <Bus className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <Badge
                                className={cn(
                                  "font-medium",
                                  getBusTypeColor(bus.type)
                                )}
                              >
                                {bus.type}
                              </Badge>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                to {bus.destination}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 sm:text-right">
                            <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {bus.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="bg-white/90 dark:bg-black/90 rounded-xl p-8 backdrop-blur-sm">
                <Bus className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                  No routes found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
