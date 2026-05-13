import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = "Operational Resilience",
  description = "Secure infrastructure for regulated and mission-critical environments",
  buttonLabel = "Request Briefing",
  buttonHref = "/Contact",
}: CTABannerProps) {
  return (
    <section className="group relative overflow-hidden rounded-[8px] bg-[#101316] px-6 py-12 sm:px-10 lg:min-h-[491px] lg:px-20 lg:py-[93px]">
      <Image
        src="/bg-cta.png"
        alt=""
        fill
        className="object-cover object-center motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out group-hover:scale-[1.02] lg:object-right"
        priority
      />
      <div className="absolute inset-0 bg-[#101316]/55 lg:bg-gradient-to-r lg:from-[#101316] lg:from-[42%] lg:to-[#101316]/5" />

      <div className="relative max-w-[642px] text-left">
        <h2 className="mb-8 text-3xl font-light tracking-[-0.03em] text-white sm:text-4xl lg:text-[60px] lg:leading-[75px]">
          {title}
        </h2>
        <p className="mb-10 text-lg font-medium leading-[1.4] tracking-[0.02em] text-[#EFEBEB] lg:text-[30px] lg:leading-[40px]">
          {description}
        </p>
        <Button
          href={buttonHref}
          variant="solid"
          size="lg"
          className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
        >
          {buttonLabel}
          <ArrowRight size={22} strokeWidth={2} />
        </Button>
      </div>
    </section>
  );
}
