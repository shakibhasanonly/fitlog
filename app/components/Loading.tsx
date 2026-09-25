export default function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <p className="text-sm font-medium text-gray-500">
          Loading workouts...
        </p>

      </div>
    </div>
  );
}