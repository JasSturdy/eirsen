"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portal", href: "/Portal" },
  { label: "Contact", href: "/Contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1802px] items-center justify-between px-6 py-6 sm:px-10 lg:px-[60px] min-[1920px]:px-0">
        {/* Logo */}
        <Link href="/" aria-label="Eirsen home" className="shrink-0">
          <Image
            src="/eirsen-logo-v2.png"
            alt="Eirsen"
            width={1142}
            height={160}
            priority
            className="h-auto w-28 opacity-90 sm:w-36"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-[50px] md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`nav-link-underline text-sm font-medium tracking-[-0.02em] transition-colors lg:text-xl ${
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
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mx-6 overflow-hidden rounded-[8px] bg-[#070E13]/95 transition-all duration-300 md:hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-5 border-t border-white/10 px-6 pb-6 pt-4">
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
