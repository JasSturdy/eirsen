import Image from "next/image";
import { BriefingButton } from "./briefing-button";

export function ResilienceCtaSection() {
  return (
    <section className="page-margin page-section-space">
      <div className="mx-auto max-w-[1802px] overflow-hidden rounded-[17px] border border-white/30 bg-[#101316]">
        <div className="relative grid min-h-[420px] lg:grid-cols-[1fr_1.2fr]">
          <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
              Operational Resilience
            </h2>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-9 text-zinc-100">
              Secure infrastructure for regulated and mission-critical environments
            </p>
            <BriefingButton className="mt-10 w-fit" />
          </div>
          <div className="absolute inset-0 lg:static">
            <Image
              src="/about-resilience.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101316] via-[#101316]/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
