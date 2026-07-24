import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    title: "Electrical Engineering",
    description:
      "Professional electrical installations, maintenance, repairs and engineering solutions for residential, commercial and industrial applications.",
    icon: "⚡",
  },
  {
    title: "Solar Energy",
    description:
      "Reliable solar power systems designed to improve energy independence and deliver sustainable power for homes and businesses.",
    icon: "☀️",
  },
  {
    title: "Security & CCTV",
    description:
      "Modern CCTV surveillance and security solutions designed to protect your people, property and business.",
    icon: "◉",
  },
  {
    title: "Networking",
    description:
      "Reliable network infrastructure and connectivity solutions that keep your systems and business connected.",
    icon: "⌁",
  },
  {
    title: "Automation",
    description:
      "Smart automation systems that improve efficiency, convenience and control across modern environments.",
    icon: "⚙",
  },
  {
    title: "Smart Technology",
    description:
      "Intelligent technology solutions that connect devices, systems and people for a smarter future.",
    icon: "◇",
  },
];

const stats = [
  { value: "24/7", label: "Technical Support" },
  { value: "6+", label: "Core Services" },
  { value: "100%", label: "Commitment" },
  { value: "∞", label: "Possibilities" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* HERO SECTION */}
<section className="relative flex min-h-screen items-center overflow-hidden pt-24">
  {/* Hero Background Image */}
  <div className="absolute inset-0">
    <img
      src="/Images/hero.jpg"
      alt="INFINITECH engineering and technology solutions"
      className="h-full w-full object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#050816]/75" />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/80 to-[#050816]/40" />

    {/* Cyan glow */}
    <div className="absolute inset-0 bg-cyan-500/[0.04]" />
  </div>

  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
  </div>

  <div className="container relative z-10 mx-auto px-6 py-20">
    <div className="max-w-5xl">
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        <span className="text-sm tracking-wider text-cyan-300">
          ENGINEERING • TECHNOLOGY • INNOVATION
        </span>
      </div>

      <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        Engineering
        <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          The Future.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
        INFINITECH is a Zimbabwean technology and engineering company
        delivering innovative solutions across electrical engineering,
        renewable energy, automation, networking, security and smart
        technology.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#050816] transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
        >
          Request a Quote
          <span className="ml-2">→</span>
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
          Explore Our Services
        </Link>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="mt-20 flex items-center gap-3 text-sm text-gray-400">
      <div className="h-px w-12 bg-cyan-400/50" />
      <span>Scroll to explore</span>
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <div className="text-3xl font-bold text-cyan-400 md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
                Who We Are
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Technology with purpose.
                <span className="block text-gray-500">
                  Engineering with vision.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-300">
                We combine engineering expertise with modern technology to
                create practical, reliable and forward-thinking solutions.
                From electrical systems and renewable energy to automation,
                security and smart technology, we help our clients build a
                more connected and sustainable future.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Discover INFINITECH
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-white/[0.02] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
                What We Do
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Our expertise.
              </h2>
            </div>

            <Link
              href="/services"
              className="text-cyan-400 transition-colors hover:text-cyan-300"
            >
              View all services →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400">
                  {service.icon}
                </div>

                <p className="mb-3 text-sm text-gray-600">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INFINITECH */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-600/[0.03] p-8 md:p-16">
            <div className="max-w-3xl">
              <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
                Why INFINITECH
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Built for today.
                <span className="block text-gray-500">
                  Ready for tomorrow.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                We believe the best technology is reliable, practical and
                designed around real-world needs. Our solutions are built to
                deliver value today while preparing our clients for the future.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-[#050816] transition hover:bg-cyan-300"
                >
                  Start a Project
                </Link>

                <Link
                  href="/projects"
                  className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition hover:border-cyan-400/50 hover:bg-white/5"
                >
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-24 text-center md:py-32">
        <div className="container mx-auto px-6">
          <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
            Let's Build Together
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold md:text-6xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Let's turn your ideas into reliable engineering and technology
            solutions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-cyan-400 px-10 py-4 font-semibold text-[#050816] transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
          >
            Contact INFINITECH
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
      }
