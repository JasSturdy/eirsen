import { Button } from "@/components/button";
import { SectionLabel } from "@/components/sectionLabel";
import { Lock } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 w-full h-full">
        <Image
          src="/portal-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1802px] px-6 sm:px-10 md:py-0 lg:px-[60px] min-[1920px]:px-0">
        <div className="max-w-3xl">
          <SectionLabel>Portal Access</SectionLabel>
          <h1 className="mb-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Secure Operational
            <br /> Access
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-300">
            A secure portal for authorised partners to access, manage, upload, and exchange operational documents.
          </p>
          <Button href="#" variant="solid">
            <Lock size={28} strokeWidth={1} className="inline-block mr-2" />
            Access Portal →
          </Button>
        </div>
      </div>
    </section>
  );
}
