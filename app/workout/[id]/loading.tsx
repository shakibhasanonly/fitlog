export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0d0c] flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#ccff00] border-t-transparent" />
        <p className="mt-5 text-gray-400">Loading workout...</p>
      </div>
    </main>
  );
}