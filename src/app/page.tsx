import { Navbar } from "@/components/navbar";
import { Hero } from "@/app/Hero/page";
import { WhatWeDo } from "@/app/WhatWeDo/page";
import { SovereignByDesign } from "@/app/Sovereign/page";
import { OperationalInfrastructure } from "@/app/OperationalInfrastructure/page";
import { WhyItMatters } from "@/app/WhyMatters/page";
import { BuiltByPractitioners } from "@/app/BuiltByPractitioners/page";
import { CTABanner } from "@/components/cta";
import { Footer } from "@/components/footer";
import { StatsRow } from "./StatsRow/page";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <main>
        <div className="page-section-space"><Hero /></div>
        <div className="page-section-space page-margin"><WhatWeDo /></div>
        <div className="page-section-space page-margin"><SovereignByDesign /></div>
        <div className="page-section-space page-margin"><OperationalInfrastructure /></div>
        <div className="page-section-space"><StatsRow /></div>
        <div className="page-margin"><WhyItMatters /></div>
        <BuiltByPractitioners />
        <div className="page-section-space page-margin"><CTABanner /></div>
      </main>
      <Footer />
    </div>
  );
}