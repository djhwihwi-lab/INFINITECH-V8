"use client";

import Image from "next/image";
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
<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050816]/95 backdrop-blur-md border-b border-cyan-400/30">
<div className="mx-auto flex min-h-[72px] w-full items-center justify-between px-6">

    {/* INFINITECH LOGO */}
    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="flex items-center cursor-pointer"
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
      onClick={() => setOpen(!open)}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/40 text-2xl text-white hover:bg-cyan-400/10 md:hidden"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
    >
      {open ? "✕" : "☰"}
    </button>

    {/* NAVIGATION LINKS */}
    <div
      className={`absolute left-0 top-[72px] w-full border-b border-cyan-400/20 bg-[#050816] px-6 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 ${
        open ? "block" : "hidden"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block py-3 text-gray-200 transition-colors hover:text-cyan-400 md:py-2"
        >
          {link.name}
        </Link>
      ))}
    </div>

  </div>
</nav>

);
}
