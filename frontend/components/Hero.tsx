export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center relative overflow-hidden">

      <div className="container grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Engineering The Future
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smart Technology
            <br />
            For A Connected World
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            INFINITECH delivers advanced electrical engineering,
            renewable energy, automation, networking, security,
            and smart technology solutions.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#contact"
              className="btn-primary"
            >
              Request A Quote
            </a>

            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="glass p-4">
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-sm text-gray-300">
                Services
              </p>
            </div>

            <div className="glass p-4">
              <h3 className="text-3xl font-bold text-cyan-400">
                100+
              </h3>
              <p className="text-sm text-gray-300">
                Projects
              </p>
            </div>

            <div className="glass p-4">
              <h3 className="text-3xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="text-sm text-gray-300">
                Support
              </p>
            </div>

          </div>

        </div>


        <div className="flex justify-center">
          <div className="glass glow p-12 animate-float">
            <div className="text-8xl">
              ⚡
            </div>

            <h2 className="text-2xl font-bold mt-6 text-center">
              INFINITECH
            </h2>

            <p className="text-gray-300 text-center mt-2">
              Future Technology Solutions
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
