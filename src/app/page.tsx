import type { Metadata } from "next";
import HomePage from "@/components/Home/HomePage";

export const metadata: Metadata = {
  title: "GUSTO 2025 - National Level Technical Symposium",
  description: "Welcome to GUSTO 2025, a National Level Technical Symposium organized by the Department of Information Technology at Government College of Engineering Erode. Experience cutting-edge technical events, workshops, and competitions.",
  openGraph: {
    title: "GUSTO 2025 - National Level Technical Symposium at GCEE",
    description: "Join us for an exciting technical symposium featuring workshops, competitions, and networking opportunities. Organized by the Department of Information Technology, Government College of Engineering Erode.",
  }
};

export default function Home() {
  return <HomePage />;
}
