import Image from "next/image";
import { SectionLabel } from "@/components/sectionLabel";
import { requirements } from "../_lib/content";

export function RequirementsSection() {
  return (
    <section className="page-margin page-section-space">
      <div className="mx-auto grid max-w-[1802px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <SectionLabel>What We Understand</SectionLabel>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
            Core Operational Requirements
          </h2>
          <ul className="mt-9 space-y-7">
            {requirements.map((item) => (
              <li key={item} className="border-b border-white/20 pb-5">
                <span className="mr-4 inline-block size-2 rounded-full bg-[#8cc43f]" />
                <span className="text-lg font-medium leading-8 text-zinc-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[380px] overflow-hidden rounded-[18px] border border-white/10 lg:min-h-[520px]">
          <Image
            src="/about-requirements.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
