export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="section pt-32">
        <div className="container mx-auto px-6">
          <p className="mb-4 uppercase tracking-widest text-cyan-400">
            About INFINITECH
          </p>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl">
            Engineering The Future
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
            INFINITECH is a Zimbabwean technology and engineering company
            delivering innovative solutions across electrical engineering,
            renewable energy, automation, networking, security and smart
            technology.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                Innovation
              </h2>
              <p className="mt-3 text-gray-300">
                We embrace modern technologies to create smarter,
                more efficient solutions.
              </p>
            </div>

            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                Engineering
              </h2>
              <p className="mt-3 text-gray-300">
                We combine engineering expertise with practical
                technology solutions.
              </p>
            </div>

            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                The Future
              </h2>
              <p className="mt-3 text-gray-300">
                Our mission is to help build a smarter, connected
                and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
