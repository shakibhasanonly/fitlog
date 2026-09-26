"use client";

import { useEffect, useState } from "react";
import { getWorkouts, Workout } from "../lib/api";
import WorkoutCard from "./WorkoutCard";
import Loading from "./Loading";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error("Failed to load workouts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="bg-[#0b0d0c] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center lg:mb-16 lg:text-left">

         

          <h2 className="heading-font text-4xl uppercase leading-none text-white sm:text-5xl md:text-6xl">
            THE LIBRARY
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 lg:mx-0 lg:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <Loading />
        ) : workouts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#181818] p-12 text-center">
            <h3 className="heading-font text-3xl uppercase text-white">
              Nothing Found
            </h3>

            <p className="mt-3 text-gray-400">
              No workouts are available right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}