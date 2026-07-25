"use client";

import { FormEvent, useState } from "react";

const services = [
"Electrical Engineering",
"Solar Energy",
"Security & CCTV",
"Networking",
"Automation",
"Smart Technology",
"Maintenance",
"Other",
];

export default function QuotePage() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();
setSubmitted(true);
}

return (
<main className="min-h-screen bg-[#050816] px-6 pb-24 pt-32 text-white">
<div className="mx-auto max-w-5xl">

    {/* HEADER */}
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 uppercase tracking-[0.25em] text-cyan-400">
        Start Your Project
      </p>

      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Request a Quote
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-gray-300">
        Tell us about your project and the INFINITECH team will get back
        to you with a tailored solution for your engineering and technology
        needs.
      </p>
    </div>

    {/* FORM */}
    <div className="rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md sm:p-10">

      {submitted ? (
        <div className="py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl text-cyan-400">
            ✓
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            Quote Request Received
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Thank you for contacting INFINITECH. Our team will review your
            project details and get back to you as soon as possible.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-full border border-cyan-400 px-7 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* PERSONAL DETAILS */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              Your Details
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+263..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              Project Details
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Service Required *
                </label>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-[#0b1024] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Project Location *
                </label>

                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. Harare, Zimbabwe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-gray-300">
                Tell Us About Your Project *
              </label>

              <textarea
                name="message"
                required
                rows={7}
                placeholder="Describe your project, requirements, or the problem you would like us to solve..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-gray-300">
                Estimated Budget
              </label>

              <input
                type="text"
                name="budget"
                placeholder="Optional"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="border-t border-white/10 pt-8">

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#050816] transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              Submit Quote Request →
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              By submitting this form, you agree to be contacted by the
              INFINITECH team regarding your enquiry.
            </p>

          </div>

        </form>
      )}

    </div>
  </div>
</main>

);
}
