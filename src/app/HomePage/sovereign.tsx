import { Card } from "@/components/card";
import { SectionLabel } from "@/components/sectionLabel";

const PILLARS = ["Irish-based", "EU-aligned", "Independent", "Sovereign"] as const;

export function SovereignByDesign() {
  return (
    <section className="mx-auto">
      <Card className="p-10 lg:p-14">
        <div className="flex flex-col xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-20 xl:items-start gap-10">

          {/* Column 1 */}
          <div>
            <SectionLabel>Sovereign By Design</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white lg:whitespace-nowrap">
              Sovereign Infrastructure.
              <br />
              Built in Ireland.
            </h2>
          </div>

          {/* Columns 2 + 3 for responsive splitt */}
          <div className="flex flex-col sm:flex-row xl:contents gap-10">

            {/* Column 2 */}
            <div className="flex flex-col gap-8 xl:justify-self-center">
              <p className="text-lg leading-relaxed text-zinc-300">
                An independent Irish company designing systems aligned with
                European regulatory, security, and assurance requirements.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                Built for environments where control, trust, and compliance are
                critical.
              </p>
            </div>

            {/* Column 3 */}
            <ul className="flex flex-col gap-4 xl:justify-self-end">
              {PILLARS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-lg text-zinc-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </Card>
    </section>
  );
}