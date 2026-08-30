import Link from "next/link";

const projects = {
  "solar-power-installation": {
    title: "Solar Power Installation",
    category: "Solar Energy",
    image: "/projects/solar.jpg",
    description:
      "Professional solar power installation designed to provide reliable, efficient and sustainable energy solutions.",
    details:
      "INFINITECH provides professional solar power solutions designed to reduce dependence on traditional electricity sources while providing reliable and sustainable power.",
  },

  "electrical-installation": {
    title: "Electrical Installation",
    category: "Electrical Engineering",
    image: "/projects/electrical.jpg",
    description:
      "Complete electrical installation services for residential and commercial environments.",
    details:
      "Our electrical installation services cover safe, reliable and professionally designed electrical systems for homes, businesses and commercial environments.",
  },

  "cctv-security-system": {
    title: "CCTV Security System",
    category: "Security",
    image: "/projects/cctv.jpg",
    description:
      "Modern CCTV surveillance systems providing reliable security monitoring and protection.",
    details:
      "INFINITECH designs and installs modern CCTV surveillance systems to help businesses and homeowners monitor and protect their properties.",
  },

  "networking-infrastructure": {
    title: "Networking Infrastructure",
    category: "Networking",
    image: "/projects/networking.jpg",
    description:
      "Structured networking solutions designed for fast, secure and reliable connectivity.",
    details:
      "We provide structured networking infrastructure designed to deliver dependable connectivity for homes, offices and commercial environments.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

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
            className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3 font-bold text-black transition hover:bg-cyan-300"
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
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {project.category}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Project Overview
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            {project.description}
          </p>

          <p className="mt-6 leading-relaxed text-gray-400">
            {project.details}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Request a Quote →
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
