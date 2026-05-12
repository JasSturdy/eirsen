import { Navbar } from "@/components/navbar";
import { Hero } from "@/app/Hero/page";
import { WhatWeDo } from "@/app/WhatWeDo/page";
import { SovereignByDesign } from "@/app/Sovereign/page";
import { OperationalInfrastructure } from "@/app/OperationalInfrastructure/page";
import { WhyItMatters } from "@/app/WhyMatters/page";
import { BuiltByPractitioners } from "@/app/BuiltByPractitioners/page";
import { CTABanner } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <SovereignByDesign />
      <OperationalInfrastructure />
      <WhyItMatters />
      <BuiltByPractitioners />
      <CTABanner />
      <Footer />
    </div>
  );
}