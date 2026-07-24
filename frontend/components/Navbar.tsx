"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#050816] border-b border-cyan-400/30">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold text-white"
        >
          <span className="text-cyan-400">INFINITECH</span>.
        </Link>

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#050816] md:bg-transparent p-6 md:p-0 gap-6`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
