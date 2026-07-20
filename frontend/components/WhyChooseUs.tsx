const reasons = [
  "Professional engineering expertise",
  "Premium technology solutions",
  "Reliable customer support",
  "Modern innovation approach",
  "Quality-focused project delivery",
  "Future-ready systems",
];

export default function WhyChooseUs() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="text-4xl font-bold mb-10">
          Why Choose INFINITECH
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {reasons.map((reason) => (
            <div
              key={reason}
              className="glass p-6 flex items-center gap-4"
            >

              <div className="text-cyan-400 text-2xl">
                ✓
              </div>

              <p className="text-gray-200 text-lg">
                {reason}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
