"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Portal", href: "/Portal" },
  { label: "Contact", href: "/Contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="flexible top-0 z-50 w-full bg-primary backdrop-blur-md">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-10 py-8">
        {/* Logo */}
        <Link href="/" aria-label="Eirsen home" className="shrink-0">
          <Image
            src="/eirsen-logo-v2.png"
            alt="Eirsen"
            width={1142}
            height={160}
            priority
            className="h-auto w-40 sm:w-52"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link-underline text-md transition-colors ${
                  isActive(href) ? "green" : "text-zinc-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-10 pb-6 gap-5 border-t border-white/10 pt-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-sm transition-colors ${
                  isActive(href) ? "green" : "text-zinc-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
