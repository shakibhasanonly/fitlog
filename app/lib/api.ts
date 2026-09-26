const BASE_URL = "https://api.api-store.workers.dev/api/fitlog";

export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
}

export async function getWorkout(id: string): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}