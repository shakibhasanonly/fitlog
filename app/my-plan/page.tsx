"use client";

import { useState } from "react";
import PlanCard from "../components/PlanCard";
import { usePlan } from "../context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved } = usePlan();

  const [tab, setTab] = useState<"plan" | "saved">("plan");

  const workouts = tab === "plan" ? plan : saved;

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
        <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-[#ccff00]">
          My Plan
        </p>

        <h1 className="heading-font text-6xl uppercase">
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

            <h2 className="mt-3 text-4xl font-bold">
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

        {/* Tabs */}
        <div className="mt-10 flex gap-3">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              tab === "plan"
                ? "bg-[#ccff00] text-black"
                : "border border-white/20 text-white"
            }`}
          >
            Today's Plan ({plan.length})
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              tab === "saved"
                ? "bg-[#ccff00] text-black"
                : "border border-white/20 text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {/* Content */}
        <div className="mt-10">
          {workouts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">
              <h2 className="heading-font text-4xl uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {workouts.map((workout) => (
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