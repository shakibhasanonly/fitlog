import Hero from "./components/Hero";
import Library from "./components/Library";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d0c]">
      <Hero />
      <Library />
    </main>
  );
}