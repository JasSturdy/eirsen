import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portal", href: "/Portal" },
  { label: "Contact", href: "/Contact" },
  null,
  { label: "Privacy", href: "/Privacy" },
  { label: "Terms", href: "/Terms" },
  { label: "Legal", href: "/Legal" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#04080B]">
      <div className="mx-auto flex max-w-[1802px] flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row sm:gap-4 lg:px-[60px] min-[1920px]:px-0">
        <p className="shrink-0 text-sm font-medium tracking-[-0.02em] text-white sm:text-xl">
          © 2026 Eirsen
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-[50px]">
          {FOOTER_LINKS.map((item, index) =>
            item === null ? (
              <li
                key={`divider-${index}`}
                aria-hidden
                className="h-4 w-px bg-zinc-600"
              />
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="nav-link-underline text-sm font-medium tracking-[-0.02em] text-white transition-colors hover:text-green lg:text-xl"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}
