"use client";

import Link from "next/link";

export default function Hero() {
return (
<section className="relative flex min-h-screen items-center overflow-hidden pt-24">

  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute right-[-10%] top-[30%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
  </div>

  <div className="container relative z-10 mx-auto grid items-center gap-16 px-6 py-16 md:grid-cols-2">

    {/* LEFT CONTENT */}
    <div>

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Engineering The Future
      </p>

      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Smart Technology
        <br />
        <span className="text-cyan-400">
          For A Connected World
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
        INFINITECH delivers advanced electrical engineering,
        renewable energy, automation, networking, security,
        and smart technology solutions for a connected future.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4">

        <Link
          href="/quote"
          className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
        >
          Request A Quote
        </Link>

        <Link
          href="/projects"
          className="rounded-full border border-cyan-400 px-7 py-3.5 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
        >
          View Projects
        </Link>

      </div>

      {/* STATS */}
      <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-cyan-400/50">
          <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            10+
          </h3>
          <p className="mt-1 text-xs text-gray-300 sm:text-sm">
            Services
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-cyan-400/50">
          <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            100+
          </h3>
          <p className="mt-1 text-xs text-gray-300 sm:text-sm">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 backdrop-blur-md transition hover:border-cyan-400/50">
          <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            24/7
          </h3>
          <p className="mt-1 text-xs text-gray-300 sm:text-sm">
            Support
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT TECHNOLOGY VISUAL */}
    <div className="flex justify-center">

      <div className="relative">

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

        {/* Main Glass Card */}
        <div className="relative w-[280px] rounded-3xl border border-cyan-400/20 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl sm:w-[360px] sm:p-14">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-6xl shadow-lg sm:h-28 sm:w-28 sm:text-7xl">
            ⚡
          </div>

          <h2 className="mt-8 text-2xl font-bold tracking-wider text-white">
            INFINITECH
          </h2>

          <p className="mt-3 text-sm text-gray-300">
            Future Technology Solutions
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="h-2 w-2 rounded-full bg-cyan-400/60" />
            <span className="h-2 w-2 rounded-full bg-cyan-400/30" />
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

);
}
