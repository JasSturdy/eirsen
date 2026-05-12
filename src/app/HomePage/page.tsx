import { Hero } from "@/app/HomePage/hero";
import { BuiltByPractitioners } from "@/app/HomePage/builtByPractitioners";
import { SovereignByDesign } from "@/app/HomePage/sovereign";
import { StatsRow } from "@/app/HomePage/statsRow";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhyItMatters } from "./whyMatters";
import { CTABanner } from "@/components/cta";
import { OperationalInfrastructure } from "./operationalInfrastructure";
import { WhatWeDo } from "./whatWeDo";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <div className="bg-primary text-white">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main>
          <div className="page-section-space"><Hero /></div>
          <div className="page-section-space page-margin"><WhatWeDo /></div>
          <div className="page-section-space page-margin"><SovereignByDesign /></div>
          <div className="page-section-space page-margin"><OperationalInfrastructure /></div>
          <div className="page-section-space"><StatsRow /></div>
          <div className="page-margin"><WhyItMatters /></div>
          <BuiltByPractitioners />
          <div className="page-margin"><CTABanner /></div>
        </main>
        <Footer />
      </div>
    </main>
  );
}