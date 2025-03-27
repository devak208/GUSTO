import type { Metadata } from "next";
import BusRoutesClient from "@/components/BusRoutes/BusRoutesClient";

export const metadata: Metadata = {
  title: "Bus Routes",
  description:
    "Find convenient bus routes and transportation information for GUSTO '25 at Government College of Engineering, Erode.",
  openGraph: {
    title: "Bus Routes",
    description:
      "Find convenient bus routes and transportation information for GUSTO '25 at Government College of Engineering, Erode.",
    images: ["/logos/AIT/gold.png"],
  },
};

export default function BusRoutesPage() {
  return <BusRoutesClient />;
}
