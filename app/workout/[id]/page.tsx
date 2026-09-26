
import { notFound } from "next/navigation";
import { getWorkout } from "../../lib/api";
import WorkoutDetailsContent from "../../components/WorkoutDetailsContent";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({
  params,
}: Props) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0d0c] text-white">
      <WorkoutDetailsContent workout={workout} />
    </main>
  );
}