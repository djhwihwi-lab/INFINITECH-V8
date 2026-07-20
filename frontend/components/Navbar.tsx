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
          <span className="text-cyan-400">
            INFINITECH
          </span>
          .
        </div>


        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>


        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#050816]/95 md:bg-transparent p-6 md:p-0 gap-6`}
        >

          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}

        </div>

      </div>

    </nav>
  );
}
