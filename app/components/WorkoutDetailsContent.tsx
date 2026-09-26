import Image from "next/image";
import {
  FaClock,
  FaFire,
  FaStar,
} from "react-icons/fa";

import { Workout } from "../lib/api";
import WorkoutActions from "./WorkoutActions";

type Props = {
  workout: Workout;
};

export default function WorkoutDetailsContent({
  workout,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

        {/* Left */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={workout.image}
              alt={workout.name}
              width={900}
              height={900}
              priority
              className="h-[320px] w-full object-cover sm:h-[480px] lg:h-[650px]"
            />
          </div>
        </div>

        {/* Right */}
        <div>

          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black sm:px-4 sm:py-2"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="heading-font text-4xl uppercase leading-none sm:text-5xl lg:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-[#171717] p-5 sm:mt-10 sm:p-6">

            <h2 className="heading-font mb-6 text-2xl uppercase">
              Key Specs
            </h2>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Equipment</span>
                <span>{workout.equipment}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Difficulty</span>
                <span>{workout.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Sets</span>
                <span>{workout.sets}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Reps</span>
                <span>{workout.reps}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaClock />
                  Duration
                </span>

                <span>{workout.duration} min</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaFire />
                  Calories
                </span>

                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaStar />
                  Rating
                </span>

                <span>{workout.rating}</span>
              </div>

            </div>

          </div>

          {/* Instructions */}
          <div className="mt-8 sm:mt-10">

            <h2 className="heading-font mb-5 text-2xl uppercase">
              Instructions
            </h2>

            <ol className="space-y-4">
              {workout.instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-gray-300">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

          </div>

          <WorkoutActions workout={workout} />

        </div>
      </div>
    </section>
  );
}