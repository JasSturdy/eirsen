const FOOTER_LINKS = [
  "Home",
  "About",
  "Portal",
  "Contact",
  "Privacy",
  "Terms",
  "Legal",
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-zinc-500">© 2026 Company X</p>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-xs text-zinc-500 transition-colors hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}