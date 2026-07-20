const projects = [
  {
    title: "Solar Power Installation",
    description:
      "Complete renewable energy solutions for residential and commercial clients.",
  },
  {
    title: "Smart Security System",
    description:
      "Modern CCTV and monitoring systems for improved safety.",
  },
  {
    title: "Industrial Electrical Upgrade",
    description:
      "Professional electrical infrastructure upgrades and maintenance.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="glass p-6 hover:scale-105 transition"
            >

              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-5">
                <span className="text-5xl">
                  ⚡
                </span>
              </div>

              <h3 className="text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
