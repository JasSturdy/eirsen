import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CredibilitySection } from "./_components/credibility-section";
import { HeroSection } from "./_components/hero-section";
import { PrinciplesSection } from "./_components/principles-section";
import { RequirementsSection } from "./_components/requirements-section";
import { ResilienceCtaSection } from "./_components/resilience-cta-section";
import { SovereignPositionSection } from "./_components/sovereign-position-section";
import { SystemsSection } from "./_components/systems-section";
import { WhoWeAreSection } from "./_components/who-we-are-section";

export default function About() {
  return (
    <div className="bg-[#070b0e] text-white">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <main>
        <HeroSection />
        <WhoWeAreSection />
        <SovereignPositionSection />
        <RequirementsSection />
        <SystemsSection />
        <PrinciplesSection />
        <CredibilitySection />
        <ResilienceCtaSection />
      </main>

      <Footer />
    </div>
  );
}
