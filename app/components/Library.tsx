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
      className="bg-[#0b0d0c] py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          

          <h2 className="heading-font text-5xl uppercase leading-none text-white md:text-6xl">
            THE LIBRARY
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <Loading />
        ) : workouts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#181818] p-12 text-center">
            <h3 className="heading-font text-3xl uppercase text-white">
              Nothing Found
            </h3>

            <p className="mt-3 text-gray-400">
              No workouts are available right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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