"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={46}
            height={46}
            priority
          />

          <span className="text-3xl font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Menu */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              pathname === "/"
                ? "bg-[#ccff00] text-black"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              pathname === "/my-plan"
                ? "bg-[#ccff00] text-black"
                : "text-gray-300 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:scale-105"
          >
            <span>Plan</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-[#ccff00]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#ccff00]"
          >
            <span>Saved</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}