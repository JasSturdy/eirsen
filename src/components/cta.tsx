import { Button } from "@/components/button";

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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950 to-black" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(74,222,128,0.06),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mb-10 text-base text-zinc-400">{description}</p>
        <Button href={buttonHref} size="lg">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}