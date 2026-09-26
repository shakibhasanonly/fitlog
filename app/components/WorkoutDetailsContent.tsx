import Image from "next/image";
import {
  FaClock,
  FaFire,
  FaStar,
  FaDumbbell,
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
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-12 lg:grid-cols-2">

        {/* Left */}
        <div>
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src={workout.image}
              alt={workout.name}
              width={900}
              height={900}
              className="h-[650px] w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Right */}
        <div>

          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="heading-font text-5xl uppercase leading-none md:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {workout.description}
          </p> 
              <div className="mt-10 rounded-3xl border border-white/10 bg-[#171717] p-6">
            <h2 className="mb-6 heading-font text-2xl uppercase">
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

          <div className="mt-10">
            <h2 className="mb-5 heading-font text-2xl uppercase">
              Instructions
            </h2>

            <ol className="space-y-4">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="text-gray-300">
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