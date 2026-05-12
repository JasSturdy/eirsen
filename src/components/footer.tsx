const FOOTER_LINKS = [
  "Home",
  "About",
  "Portal",
  "Contact",
  null,
  "Privacy",
  "Terms",
  "Legal",
] as const;

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex flex-col items-center justify-between gap-6 px-12 py-8 sm:flex-row sm:gap-4">
        <p className="text-sm sm:text-md text-white shrink-0">© 2026 Eirsen</p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          {FOOTER_LINKS.map((item, index) =>
            item === null ? (
              <li key={`divider-${index}`} aria-hidden className="h-4 w-px bg-zinc-600" />
            ) : (
              <li key={item}>
                <a href="#" className="nav-link-underline text-sm lg:text-md text-white transition-colors hover:text-green">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}