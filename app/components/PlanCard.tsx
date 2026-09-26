"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaClock, FaFire, FaStar, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

import { Workout } from "../lib/api";
import { usePlan } from "../context/PlanContext";

type Props = {
  workout: Workout;
  type: "plan" | "saved";
};

export default function PlanCard({ workout, type }: Props) {
  const {
    removeFromPlan,
    removeFromSaved,
    markDone,
  } = usePlan();

  function handleRemove() {
    if (type === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }

    toast.success("Removed successfully");
  }

  function handleDone() {
    markDone(workout.id);
    toast.success("Workout completed!");
  }

  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#171717] p-5 lg:flex-row lg:items-center">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={workout.image}
          alt={workout.name}
          width={180}
          height={180}
          className="h-36 w-36 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="heading-font text-3xl uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#ccff00]" />
            {workout.duration} min
          </div>

          <div className="flex items-center gap-2">
            <FaFire className="text-[#ccff00]" />
            {workout.caloriesBurned} kcal
          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            {workout.rating}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-[#ccff00]"
        >
          View Details
        </Link>

        {type === "plan" && (
          <button
            onClick={handleDone}
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
          >
            <FaCheck />
            Mark as Done
          </button>
        )}

        <button
          onClick={handleRemove}
          className="flex items-center gap-2 rounded-full border border-red-500 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FaTimes />
        </button>
      </div>
    </article>
  );
}