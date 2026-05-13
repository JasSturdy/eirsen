import { Card } from "@/components/card";
import { SectionLabel } from "@/components/sectionLabel";

const PILLARS = ["Irish-based", "EU-aligned", "Independent", "Sovereign"] as const;

export function SovereignByDesign() {
  return (
    <section>
      <Card className="rounded-[8px] border-white/25 px-6 py-8 sm:px-10 lg:px-[60px] lg:py-12">
        <div className="grid gap-10 xl:grid-cols-[minmax(360px,673px)_minmax(320px,674px)_188px] xl:items-center xl:gap-[93px]">
          <div>
            <SectionLabel>Sovereign By Design</SectionLabel>
            <h2 className="text-3xl font-medium leading-[1.18] tracking-[-0.03em] text-white sm:text-4xl lg:text-[50px] lg:leading-[75px]">
              Sovereign Infrastructure. Built in Ireland.
            </h2>
          </div>

          <div className="space-y-8 text-lg font-medium leading-[30px] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl">
            <p>
              An independent Irish company designing systems aligned with
              European regulatory, security, and assurance requirements.
            </p>
            <p>
              Built for environments where control, trust, and compliance are
              critical.
            </p>
          </div>

          <ul className="flex flex-col gap-3 text-lg font-medium leading-[30px] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EFEBEB]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}
