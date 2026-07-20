import WhatsAppButton from "@/components/WhatsAppButton";import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QuoteCTA from "@/components/QuoteCTA";import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
<ServicesSection />
<ProjectsSection />
<WhyChooseUs />
<Testimonials />
<FAQ />
<QuoteCTA />
      <section className="section">
        <div className="container">

          <h2 className="text-4xl font-bold mb-8">
            Our Technology Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="glass p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Electrical Engineering
              </h3>
              <p className="text-gray-300 mt-3">
                Professional electrical installations,
                maintenance and engineering solutions.
              </p>
            </div>

            <div className="glass p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Solar Energy
              </h3>
              <p className="text-gray-300 mt-3">
                Reliable renewable energy systems
                for homes and businesses.
              </p>
            </div>

            <div className="glass p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Smart Technology
              </h3>
              <p className="text-gray-300 mt-3">
                Automation, networking and
                intelligent systems.
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
