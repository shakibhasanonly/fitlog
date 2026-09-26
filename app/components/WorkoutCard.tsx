import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { Workout } from "../lib/api";

type Props = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
  return (
    <Link href={`/workout/${workout.id}`} className="block h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#171717] transition-all duration-300 hover:-translate-y-2 hover:border-[#ccff00] hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]">

        {/* Image */}
        <div className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={workout.image}
            alt={workout.name}
            className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">

          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black sm:text-[11px]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="heading-font min-h-[56px] text-2xl leading-none uppercase text-white sm:min-h-16 sm:text-[30px]">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-3 flex-1 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-xs text-gray-300 sm:flex sm:items-center sm:justify-between sm:text-sm">

            <div className="flex items-center gap-2">
              <FaClock className="text-[#ccff00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <FaFire className="text-[#ccff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>{workout.rating}</span>
            </div>

          </div>

        </div>

      </article>
    </Link>
  );
}