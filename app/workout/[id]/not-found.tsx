import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0d0c] px-5 text-center text-white">
      <h1 className="heading-font text-6xl">404</h1>

      <p className="mt-4 text-gray-400">
        Workout not found.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#ccff00] px-6 py-3 font-semibold text-black transition hover:scale-105"
      >
        Back to Home
      </Link>
    </main>
  );
}