const questions = [
  {
    question: "What services does INFINITECH provide?",
    answer:
      "We provide electrical engineering, solar systems, automation, networking, security systems and technology consultancy.",
  },
  {
    question: "Do you handle commercial projects?",
    answer:
      "Yes. We support residential, commercial and industrial technology projects.",
  },
  {
    question: "Can I request a project quotation?",
    answer:
      "Yes. You can submit a quote request and our team will respond with the next steps.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes. We provide ongoing maintenance and technical support solutions.",
  },
];

export default function FAQ() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {questions.map((item) => (
            <div
              key={item.question}
              className="glass p-6"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                {item.question}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
