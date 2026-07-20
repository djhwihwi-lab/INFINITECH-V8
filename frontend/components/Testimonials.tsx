const testimonials = [
  {
    name: "Corporate Client",
    message:
      "INFINITECH delivered a reliable and professional technology solution for our business.",
  },
  {
    name: "Residential Customer",
    message:
      "The solar installation service was efficient, clean and exceeded expectations.",
  },
  {
    name: "Business Partner",
    message:
      "A forward-thinking technology company with excellent engineering standards.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="text-4xl font-bold mb-10">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass p-6"
            >

              <div className="text-cyan-400 text-3xl mb-4">
                “
              </div>

              <p className="text-gray-300">
                {item.message}
              </p>

              <h3 className="mt-5 font-bold">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
