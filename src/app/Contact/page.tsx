import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "./hero";
import { Footer } from "@/components/footer";
import { ContactForm } from "./form";
import { FAQ } from "./faq";
import { CTABanner } from "@/components/cta";

export default function Contact() {
  return (
    <div className="bg-primary text-white">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <Hero />
        <div className="page-section-space page-margin"><ContactForm /></div>
        <div className="page-section-space page-margin"><FAQ /></div>
        <div className="page-section-space page-margin"><CTABanner /></div>
      </main>
      <Footer />
    </div>
  );
}