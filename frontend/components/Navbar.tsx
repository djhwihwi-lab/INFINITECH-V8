"use client";import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[99999] w-full bg-[#050816]/95 backdrop-blur-md border-b border-cyan-400/30 pointer-events-auto">
      <div className="container mx-auto flex min-h-[72px] items-center justify-between px-6">
        
        {/* INFINITECH LOGO */}
        <Link
  href="/"
  onClick={() => setOpen(false)}
  className="relative z-[100000] flex items-center cursor-pointer"
  aria-label="INFINITECH Home"
>
  <Image
    src="/logo.svg"
    alt="INFINITECH Zimbabwe"
    width={210}
    height={50}
    priority
  />
</Link>
        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="relative z-[100000] flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 text-2xl text-white hover:bg-cyan-400/10 md:hidden cursor-pointer"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* NAVIGATION LINKS */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 top-full z-[99999] w-full flex-col gap-4 border-b border-cyan-400/20 bg-[#050816] p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="relative z-[100000] block cursor-pointer py-2 text-gray-200 transition-colors hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
