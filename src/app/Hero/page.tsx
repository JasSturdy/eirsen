import { Button } from "@/components/button";
import Image from "next/image";

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
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 lg:left-1/2 lg:right-0 lg:inset-y-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-transparent" />
      </div>

      <div className="relative w-full mx-auto px-10 py-32 md:py-0">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Infrastructure
            <br />
            Mission-Critical Systems
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-300">
            Secure Operational Systems. Designed for mission-critical and
            regulated environments.
          </p>
          <Button href="#" variant="solid">
            Request Briefing →
          </Button>
        </div>
      </div>

      {/* Sector ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary backdrop-blur-xl overflow-hidden">

        {/* Mobile */}
        <div className="flex md:hidden">
          <ul className="animate-ticker flex shrink-0 items-center gap-8 py-4 text-sm text-white whitespace-nowrap">
            {[...SECTORS, ...SECTORS].map((sector, i) => (
              <li key={i} className="flex shrink-0 items-center gap-8">
                <span className="text-white">•</span>
                {sector}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-between py-4 text-sm text-white px-10">
          {SECTORS.map((sector, i) => (
            <li key={sector} className="flex shrink-0 items-center gap-4">
              {i > 0 && <span className="text-white">•</span>}
              {sector}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}