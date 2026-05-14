import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CredibilitySection } from "./_components/credibility";
import { HeroSection } from "./_components/hero";
import { PrinciplesSection } from "./_components/principles";
import { RequirementsSection } from "./_components/requirements";
import { SovereignPositionSection } from "./_components/sovereign";
import { SystemsSection } from "./_components/systemsSection";
import { WhoWeAreSection } from "./_components/whoWeAre";
import { CTABanner } from "@/components/cta";

export default function About() {
  return (
    <div className="bg-primary text-white">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <main>
        <HeroSection />
        <div className="page-section-space page-margin"><WhoWeAreSection /></div>
        <div className="page-section-space page-margin"><SovereignPositionSection /></div>
        <div className="page-section-space page-margin"><RequirementsSection /></div>
        <div className="page-section-space page-margin"><SystemsSection /></div>
        <div className="page-section-space page-margin"><PrinciplesSection /></div>
        <div className="page-section-space page-margin"><CredibilitySection /></div>
        <div className="page-section-space page-margin"><CTABanner /></div>
      </main>

      <Footer />
    </div>
  );
}
