"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PlanCard from "../components/PlanCard";
import { usePlan } from "../context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();

  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const workouts = tab === "plan" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    const items = [...workouts];

    switch (sortBy) {
      case "calories":
        return items.sort(
          (a, b) => a.caloriesBurned - b.caloriesBurned
        );

      case "rating":
        return items.sort((a, b) => b.rating - a.rating);

      default:
        return items.sort((a, b) => a.duration - b.duration);
    }
  }, [workouts, sortBy]);

  const totalMinutes = plan.reduce(
    (sum, item) => sum + item.duration,
    0
  );

  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0d0c] px-5 py-10 text-white">
      <section className="mx-auto max-w-7xl">

        <h1 className="heading-font text-5xl uppercase md:text-6xl">
          MY PLAN
        </h1>

        <p className="mt-3 max-w-xl text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <p className="text-sm text-gray-400">
              Exercises
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#ccff00]">
              {plan.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <p className="text-sm text-gray-400">
              Minutes
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {totalMinutes}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <p className="text-sm text-gray-400">
              Calories
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {totalCalories}
            </h2>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex w-fit rounded-2xl bg-[#171717] p-1">
            <button
              onClick={() => setTab("plan")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                tab === "plan"
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setTab("saved")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                tab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="w-full max-w-sm">
            <label className="mb-2 block text-sm font-semibold text-white">
              Sort By
            </label>

            <div className="rounded-full border-2 border-white p-1">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "duration"
                      | "calories"
                      | "rating"
                  )
                }
                className="w-full rounded-full bg-[#0b0d0c] px-5 py-3 text-white outline-none"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

        </div>

        {/* Cards */}
        <div className="mt-10">
          {sortedWorkouts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">

              <h2 className="heading-font text-4xl uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex items-center rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:scale-105"
              >
                Go to Workouts
              </Link>

            </div>
          ) : (
            <div className="space-y-5">
              {sortedWorkouts.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  type={tab}
                />
              ))}
            </div>
          )}
        </div>

      </section>
    </main>
  );
}