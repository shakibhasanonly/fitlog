import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-10">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#17191d] p-6 sm:p-8 lg:grid-cols-2 lg:p-16">
        {/* Left Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[4px] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="heading-font text-4xl font-bold uppercase leading-[0.9] text-white sm:text-5xl lg:max-w-lg lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-gray-400 lg:mx-0 lg:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#CCFF00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:brightness-110"
          >
            Browse Workouts
            <FaArrowRight size={14} />
          </a>
        </div>

        {/* Right Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image
            src="/hero.png"
            alt="Hero"
            width={520}
            height={520}
            priority
            className="w-full max-w-[260px] object-contain sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}