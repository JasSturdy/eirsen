import { Button } from "@/components/button";
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
  buttonLabel = "Request Briefing →",
  buttonHref = "#",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden p-10 sm:p-16 lg:p-20" >
      <Image
        src="/bg-cta.png"
        alt=""
        fill
        className="object-fill object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative text-left">
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-white">
          {title}
        </h2>
        <p className="mb-10 text-lg text-zinc-300">{description}</p>
        <Button href={buttonHref} variant="solid">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}