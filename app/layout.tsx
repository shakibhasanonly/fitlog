import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { PlanProvider } from "./context/PlanContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} bg-[#0b0d0c] text-white antialiased`}
      >
        <PlanProvider>
          <Navbar />

          {children}

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#171717",
                color: "#fff",
                border: "1px solid #ccff00",
              },
            }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}