import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d0c]">
      <Hero />

      <section
        id="library"
        className="mx-auto mt-12 max-w-7xl px-6 pb-20"
      >
        <h2 className="text-4xl font-black uppercase text-white">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </section>
    </main>
  );
}