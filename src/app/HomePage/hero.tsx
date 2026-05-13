import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";
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
    <section className="group relative flex min-h-[720px] items-center overflow-hidden pb-20 pt-24 lg:min-h-[841px] lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 lg:inset-y-0 lg:left-[42%] lg:right-0">
        <Image
          src="/home-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out group-hover:scale-[1.02] lg:object-left"
        />
        <div className="absolute inset-0 bg-[#04080B]/70 lg:bg-gradient-to-r lg:from-[#04080B] lg:via-[#04080B]/20 lg:to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1802px] px-6 sm:px-10 lg:px-[60px] min-[1920px]:px-0">
        <div className="max-w-[920px]">
          <h1 className="mb-8 text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-[78px] lg:leading-[75px]">
            Trusted Infrastructure
            <br />
            Mission-Critical Systems
          </h1>
          <p className="mb-10 max-w-[863px] text-lg font-medium leading-[30px] tracking-[0.02em] text-[#EFEBEB] sm:text-2xl">
            Secure Operational Systems. Designed for mission-critical and
            regulated environments.
          </p>
          <Button
            href="/Contact"
            variant="solid"
            size="md"
            className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
          >
            Request Briefing
            <ArrowRight size={16} strokeWidth={2} />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-primary/95 backdrop-blur-xl">
        <div className="homepage-marquee flex py-6 text-xs font-medium tracking-[-0.02em] text-white sm:text-sm lg:text-xl">
          {[0, 1].map((group) => (
            <ul
              key={group}
              aria-hidden={group === 1}
              className="homepage-marquee-track flex min-w-max shrink-0 items-center gap-10 whitespace-nowrap px-10 sm:gap-16 lg:gap-20"
            >
              {SECTORS.map((sector) => (
                <li
                  key={`${group}-${sector}`}
                  className="flex shrink-0 items-center gap-10 transition-colors duration-300 hover:text-[#8CC43F] sm:gap-16 lg:gap-20"
                >
                  {sector}
                  <span className="text-white">•</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
