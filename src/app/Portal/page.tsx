import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "./hero";
import { Footer } from "@/components/footer";
import { WhoFor } from "./whoFor";
import { Capabilities } from "./capabilities";
import { SecurityAssurance } from "./securityAssurance";
import { AccessPortal } from "./access";

export default function Portal() {
  return (
    <div className="bg-primary text-white">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <Hero />
        <div className="page-section-space page-margin"><WhoFor /></div>
        <div className="page-section-space page-margin"><Capabilities /></div>
        <div className="page-section-space page-margin"><SecurityAssurance /></div>
        <div className="page-section-space page-margin"><AccessPortal /></div>
      </main>
      <Footer />
    </div>
  );
}