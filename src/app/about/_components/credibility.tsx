import { SectionLabel } from "@/components/sectionLabel";
import { sectors } from "../_lib/content";

export function CredibilitySection() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1802px] gap-8 lg:grid-cols-2">
        <article className="rounded-[17px] border-4 border-[#2b2b2b] p-8 sm:p-10 lg:min-h-[520px]">
          <SectionLabel>Credibility</SectionLabel>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
            Built by Practitioners
          </h2>
          <h3 className="mt-10 text-3xl font-medium leading-tight text-white">
            Research Meets Operational Experience
          </h3>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-zinc-200">
            Our expertise combines academic research and real-world experience in designing and operating systems in regulated and high-assurance environments.
          </p>
        </article>

        <article className="rounded-[17px] border-4 border-[#2b2b2b] p-8 sm:p-10 lg:min-h-[520px]">
          <SectionLabel>Context</SectionLabel>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
            Built for mission-critical sectors:
          </h2>
          <ul className="mt-12 space-y-6">
            {sectors.map((sector) => (
              <li key={sector} className="border-b border-white/20 pb-4">
                <span className="mr-4 inline-block size-2 rounded-full bg-[#8cc43f]" />
                <span className="text-lg font-medium leading-8 text-zinc-100">{sector}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
