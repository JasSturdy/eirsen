import Image from "next/image";
import { SectionLabel } from "@/components/sectionLabel";
import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:min-h-[820px] lg:px-[60px] lg:py-28 min-[1920px]:px-0">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[68%] lg:block">
        <Image
          src="/about-hero.png"
          alt=""
          fill
          priority
          sizes="68vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b0e] via-[#070b0e]/70 to-[#070b0e]/10" />
      </div>

      <div className="mx-auto grid max-w-[1802px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-3xl">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-7 text-4xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[78px]">
            Operational Systems.
            <br />
            Infrastructure Design.
          </h1>
          <p className="mt-8 mb-8 max-w-3xl text-lg font-medium leading-8 tracking-wide text-zinc-100 sm:text-2xl">
            We design secure operational systems for mission-critical and regulated environments.
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

        <div className="relative min-h-[320px] overflow-hidden rounded-[18px] border border-white/10 lg:hidden">
          <Image
            src="/about-hero.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b0e]/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
