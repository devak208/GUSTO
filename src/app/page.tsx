import type { Metadata } from "next";
import HomePage from "@/components/Home/HomePage";

export const metadata: Metadata = {
  title: "GUSTO 2025 - National Level Technical Symposium",
  description:
    "Welcome to GUSTO 2025, a National Level Technical Symposium organized by the Department of Information Technology at Government College of Engineering, Erode. Experience competitions, cultural performances, and unforgettable moments of creativity and fun.",
  openGraph: {
    title: "GUSTO 2025 - National Level Technical Symposium at GCEE",
    description:
      "Join us at Gusto 25 on 23rd of April for a celebration of innovation and talent! Experience competitions, cultural performances, and unforgettable moments of creativity and fun. Organized by the Department of Information Technology, Government College of Engineering, Erode.",
  },
};

export default function Home() {
  return <HomePage />;
}
