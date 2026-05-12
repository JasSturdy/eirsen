import { Button } from "@/components/button";

const SECTORS = [
  "Defence",
  "Health & Medical",
  "Telecommunications",
  "Aerospace",
  "Transport",
  "Energy",
  "Government",
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_60%_80%_at_80%_30%,rgba(74,222,128,0.08),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Infrastructure
            <br />
            Mission-Critical Systems
          </h1>
          <p className="mb-10 text-base leading-relaxed text-zinc-400">
            Secure Operational Systems. Designed for mission-critical and
            regulated environments.
          </p>
          <Button href="#">Request Briefing →</Button>
        </div>
      </div>

      {/* Sector ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6">
          <ul className="flex items-center gap-8 py-4 text-xs text-zinc-500">
            {SECTORS.map((sector, i) => (
              <li key={sector} className="flex shrink-0 items-center gap-8">
                {i > 0 && <span className="text-zinc-700">+</span>}
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}