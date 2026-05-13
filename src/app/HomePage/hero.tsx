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
    <section className="group relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 lg:left-1/2 lg:right-0 lg:inset-y-0">
        <Image
          src="/home-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out group-hover:scale-[1.02] lg:object-left"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-transparent" />
      </div>

      <div className="relative w-full mx-auto px-10 md:py-0">
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
          <Button
            href="#"
            variant="solid"
            className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
          >
            Request Briefing →
          </Button>
        </div>
      </div>

      {/* Sector ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-primary backdrop-blur-xl">
        <div className="flex">
          <ul className="animate-ticker flex min-w-max shrink-0 items-center gap-8 whitespace-nowrap px-10 py-4 text-sm text-white [animation-duration:18s] md:gap-28 lg:gap-36 xl:gap-44">
            {[...SECTORS, ...SECTORS].map((sector, i) => (
              <li
                key={`${sector}-${i}`}
                className="flex shrink-0 items-center gap-8 transition-colors duration-300 hover:text-[#8CC43F] md:gap-10"
              >
                {i % SECTORS.length > 0 && <span className="text-white">•</span>}
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
