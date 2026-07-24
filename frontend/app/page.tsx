import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="section pt-32">
        <div className="container">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            About INFINITECH
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Engineering The Future
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            INFINITECH is a Zimbabwean technology and engineering company
            delivering innovative solutions across electrical engineering,
            renewable energy, automation, networking, security and smart
            technology.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                Innovation
              </h2>
              <p className="text-gray-300 mt-3">
                We embrace modern technologies to create smarter,
                more efficient solutions.
              </p>
            </div>

            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                Engineering
              </h2>
              <p className="text-gray-300 mt-3">
                We combine engineering expertise with practical
                technology solutions.
              </p>
            </div>

            <div className="glass p-6">
              <h2 className="text-xl font-bold text-cyan-400">
                The Future
              </h2>
              <p className="text-gray-300 mt-3">
                Our mission is to help build a smarter, connected
                and sustainable future.
              </p>
            </div>

            <div className="glass p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Solar Energy
              </h3>
              <p className="text-gray-300 mt-3">
                Reliable renewable energy systems for homes and businesses.
              </p>
            </div>

            <div className="glass p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Smart Technology
              </h3>
              <p className="text-gray-300 mt-3">
                Automation, networking and intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
