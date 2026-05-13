import { Button } from "@/components/button";
import { SectionLabel } from "@/components/sectionLabel";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 lg:inset-y-0 lg:left-2/5 lg:right-0">
        <Image
          src="/contact-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1802px] px-6 sm:px-10 md:py-0 lg:px-[60px] min-[1920px]:px-0">
        <div className="max-w-3xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Institutional and
            <br />
            Operational Enquiries
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-300">
            For organisations seeking secure, sovereign, and reliable
            operational infrastructure
          </p>
          <Button href="/Contact" variant="solid">
            Request Briefing →
          </Button>
        </div>
      </div>
    </section>
  );
}
