"use client";

import { FaBookmark, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

import { Workout } from "../lib/api";
import { usePlan } from "../context/PlanContext";

type Props = {
  workout: Workout;
};

export default function WorkoutActions({ workout }: Props) {
  const {
    plan,
    saved,
    addToPlan,
    addToSaved,
  } = usePlan();

  function handlePlan() {
    if (plan.find((item) => item.id === workout.id)) {
      toast("Already added to today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("You can only add 5 workouts.");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  }

  function handleSaved() {
    if (saved.find((item) => item.id === workout.id)) {
      toast("Already saved");
      return;
    }

    addToSaved(workout);
    toast.success("Saved for later");
  }

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button
        onClick={handlePlan}
        className="flex items-center justify-center gap-3 rounded-full bg-[#ccff00] px-8 py-4 font-bold text-black transition hover:scale-105"
      >
        <FaPlus />
        Add to today's plan
      </button>

      <button
        onClick={handleSaved}
        className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        <FaBookmark />
        Save for later
      </button>
    </div>
  );
}