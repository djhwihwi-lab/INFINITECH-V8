export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="container py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-cyan-400">
              INFINITECH
            </span>
            .
          </h2>

          <p className="text-gray-400 mt-4">
            Engineering innovative technology solutions
            for a smarter connected future.
          </p>
        </div>


        <div>
          <h3 className="font-bold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Electrical Engineering</li>
            <li>Solar Systems</li>
            <li>Automation</li>
            <li>Networking</li>
            <li>Security Systems</li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Harare, Zimbabwe</li>
            <li>Email: info@infinitech.co.zw</li>
            <li>WhatsApp Support</li>
          </ul>
        </div>

      </div>


      <div className="text-center py-6 border-t border-white/10 text-gray-500">
        © {new Date().getFullYear()} INFINITECH Zimbabwe. All rights reserved.
      </div>

    </footer>
  );
}
