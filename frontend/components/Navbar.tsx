"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Careers",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold">
          <span className="text-cyan-400">INFINITECH</span>
          <span className="text-white">.</span>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent`}
        >
          <div className="flex flex-col md:flex-row gap-6 p-6 md:p-0">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-200 hover:text-cyan-400 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}
