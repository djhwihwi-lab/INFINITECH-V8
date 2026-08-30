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
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="mx-auto max-w-7xl">
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

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="mb-2 text-sm font-medium text-cyan-400">
                  {project.category}
                </p>

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 font-semibold text-cyan-400">
                  View Project →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
