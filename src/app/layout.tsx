import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/UI/theme/theme-provider";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gustogcee.in"),
  title: {
    template: "%s | GUSTO '25",
    default: "GUSTO '25 | National Level Technical Symposium",
  },
  description:
    "GUSTO '25 - A National Level Technical Symposium organized by the Department of Information Technology at Government College of Engineering, Erode.",
  keywords: [
    "GUSTO",
    "Technical Symposium",
    "GCEE",
    "Government College of Engineering Erode",
    "IT Department",
    "Technical Events",
    "College Symposium",
  ],
  authors: [{ name: "GCEE IT Department" }],
  creator: "GCEE IT Department",
  publisher: "Government College of Engineering, Erode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logos/AIT/gold.png",
    shortcut: "/logos/AIT/gold.png",
    apple: "/logos/AIT/gold.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gustogcee.in",
    title: "GUSTO '25 | National Level Technical Symposium",
    description:
      "GUSTO '25 - A National Level Technical Symposium organized by the Department of Information Technology at Government College of Engineering, Erode.",
    siteName: "GUSTO '25",
    images: ["/logos/AIT/gold.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUSTO '25 | National Level Technical Symposium",
    description:
      "GUSTO '25 - A National Level Technical Symposium organized by the Department of Information Technology at Government College of Engineering, Erode.",
    images: ["/logos/AIT/gold.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-black overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider disableTransitionOnChange>
          <div className="relative flex flex-col min-h-screen bg-white dark:bg-black">
            <Header />
            <main className="flex-1 mt-12">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
