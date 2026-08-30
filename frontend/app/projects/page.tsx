import Link from "next/link";

const projects = [
  {
    title: "Solar Power Installation",
    slug: "solar-power-installation",
    category: "Solar Energy",
    description:
      "Professional solar power installation designed to provide reliable, efficient and sustainable energy solutions.",
    image: "/projects/solar.jpg",
  },
  {
    title: "Electrical Installation",
    slug: "electrical-installation",
    category: "Electrical Engineering",
    description:
      "Complete electrical installation services for residential and commercial environments.",
    image: "/projects/electrical.jpg",
  },
  {
    title: "CCTV Security System",
    slug: "cctv-security-system",
    category: "Security",
    description:
      "Modern CCTV surveillance systems providing reliable security monitoring and protection.",
    image: "/projects/cctv.jpg",
  },
  {
    title: "Networking Infrastructure",
    slug: "networking-infrastructure",
    category: "Networking",
    description:
      "Structured networking solutions designed for fast, secure and reliable connectivity.",
    image: "/projects/networking.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Work
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Explore some of the electrical, solar, security and technology
            projects delivered by INFINITECH.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* Category */}
                <div className="absolute bottom-5 left-5 rounded-full border border-cyan-400/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h2>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center font-semibold text-cyan-400">
                  <span>View Project</span>

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 px-6 py-14 text-center backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Let INFINITECH help you design, install and deliver a reliable
            technology solution built around your needs.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Request a Quote →
          </Link>
        </div>

      </section>
    </main>
  );
}
