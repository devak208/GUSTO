import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/UI/theme/theme-provider";
import { ThemeToggle } from "@/components/UI/theme/theme-toggle";
import Footer from "@/components/Home/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/logos/AIT/bronze.png",
  },
  title: "GCEE - Gusto",
  description: "Welcome to the GCEE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative min-h-screen">
            {/* AIT Logo */}
            <Image
              src="/logos/AIT/gold.png"
              alt="AIT Logo"
              width={100}
              height={100}
              className="absolute left-2 top-2 z-50 hidden w-[60px] h-auto sm:w-[80px] md:w-[100px] dark:block"
              priority
            />
            <Image
              src="/logos/AIT/silver.png"
              alt="AIT Logo"
              width={100}
              height={100}
              className="absolute left-2 top-2 z-50 block w-[60px] h-auto sm:w-[80px] md:w-[100px] dark:hidden"
              priority
            />

            <ThemeToggle />

            {children}

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
