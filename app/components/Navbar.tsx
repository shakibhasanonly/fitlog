"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Mobile Left */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FitLog"
              width={36}
              height={36}
            />

            <span className="heading-font text-2xl uppercase tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link
          href="/"
          className="hidden items-center gap-3 md:flex"
        >
          <Image
            src="/logo.png"
            alt="FitLog"
            width={46}
            height={46}
            priority
          />

          <span className="heading-font text-3xl uppercase tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className={`rounded-full px-6 py-2 ${
              pathname === "/"
                ? "bg-[#ccff00] text-black"
                : "text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-6 py-2 ${
              pathname === "/my-plan"
                ? "bg-[#ccff00] text-black"
                : "text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black md:px-4 md:text-sm"
          >
            Plan

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-[#ccff00]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white md:flex"
          >
            Saved

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#171717] md:hidden">
          <div className="flex flex-col gap-3 p-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 ${
                pathname === "/"
                  ? "bg-[#ccff00] font-bold text-black"
                  : "text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-4 py-3 ${
                pathname === "/my-plan"
                  ? "bg-[#ccff00] font-bold text-black"
                  : "text-white"
              }`}
            >
              My Plan
            </Link>

            <div className="mt-3 rounded-full border border-white/20 px-4 py-3 text-white">
              Saved ({saved.length})
            </div>

          </div>
        </div>
      )}
    </header>
  );
}