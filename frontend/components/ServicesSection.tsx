const services = [
  {
    title: "Electrical Engineering",
    description:
      "Professional electrical installations, maintenance, repairs and engineering solutions.",
  },
  {
    title: "Solar Energy Systems",
    description:
      "Reliable renewable energy solutions designed for homes and businesses.",
  },
  {
    title: "Automation & Smart Systems",
    description:
      "Modern automation technologies for smarter and more efficient spaces.",
  },
  {
    title: "CCTV & Security",
    description:
      "Advanced security monitoring and surveillance solutions.",
  },
  {
    title: "Networking Solutions",
    description:
      "Enterprise networking infrastructure and connectivity solutions.",
  },
  {
    title: "Technology Consultancy",
    description:
      "Expert guidance for digital transformation and technology projects.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="text-4xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="glass p-6 glow"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                {service.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
