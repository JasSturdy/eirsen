const NAV_LINKS = ["Home", "About", "Portal", "Contact"] as const;

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight text-white">
          Company X
        </span>
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm transition-colors ${
                  link === "Home"
                    ? "text-green-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}