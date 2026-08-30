import Link from "next/link";

const projects = {
  "solar-power-installation": {
    title: "Solar Power Installation",
    category: "Solar Energy",
    image: "/projects/solar.jpg",
    description:
      "A professional solar power solution designed to provide reliable, efficient and sustainable energy.",
    details:
      "INFINITECH delivers complete solar solutions, from system design and equipment selection to installation, testing and commissioning.",
    features: [
      "Solar panel installation",
      "Inverter systems",
      "Battery storage",
      "System testing and commissioning",
    ],
  },

  "electrical-installation": {
    title: "Electrical Installation",
    category: "Electrical Engineering",
    image: "/projects/electrical.jpg",
    description:
      "Safe, efficient and professional electrical installations for residential and commercial environments.",
    details:
      "Our electrical engineering solutions are designed around safety, reliability and quality workmanship.",
    features: [
      "Electrical wiring",
      "Distribution boards",
      "Lighting systems",
      "Testing and maintenance",
    ],
  },

  "cctv-security-system": {
    title: "CCTV Security System",
    category: "Security",
    image: "/projects/cctv.jpg",
    description:
      "Modern CCTV surveillance technology designed to improve security and provide reliable monitoring.",
    details:
      "INFINITECH provides professional CCTV solutions with high-definition cameras, recording systems and remote monitoring capabilities.",
    features: [
      "HD CCTV cameras",
      "Digital video recording",
      "Remote monitoring",
      "Security system installation",
    ],
  },

  "networking-infrastructure": {
    title: "Networking Infrastructure",
    category: "Networking",
    image: "/projects/networking.jpg",
    description:
      "Fast, secure and reliable networking infrastructure for modern homes and businesses.",
    details:
      "We design and install structured networking systems that provide dependable connectivity and room for future expansion.",
    features: [
      "Structured cabling",
      "Network equipment installation",
      "Wi-Fi infrastructure",
      "Network testing and configuration",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>

          <p className="mt-4 text-gray-400">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-block rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <Link
            href="/projects"
            className="mb-8 inline-block text-sm font-semibold text-cyan-400 transition hover:text-white"
          >
            ← Back to Projects
          </Link>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            {project.description}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Engineering built around your needs.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {project.details}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold">Project Features</h3>

            <div className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b border-white/10 pb-4"
                >
                  <span className="text-xl text-cyan-400">✓</span>

                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Start Your Project
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
          Ready to build something better?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          Talk to INFINITECH about your next electrical, solar, security or
          technology project.
        </p>

        <Link
          href="/quote"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105"
        >
          Request a Quote →
        </Link>
      </section>
    </main>
  );
  }
