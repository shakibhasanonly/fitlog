import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      <div className="grid items-center gap-10 rounded-3xl bg-[#17191d] p-10 lg:grid-cols-2 lg:p-16">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="heading-font max-w-lg text-5xl font-bold uppercase leading-[0.9] text-white lg:text-7xl">
               TRAIN WITH INTENT.
                <br />
             LOG EVERY SET.
           </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-sm font-bold uppercase text-black transition hover:brightness-110"
          >
            Browse Workouts
            <FaArrowRight size={14} />
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/hero.png"
            alt="Hero"
            width={520}
            height={520}
            priority
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}