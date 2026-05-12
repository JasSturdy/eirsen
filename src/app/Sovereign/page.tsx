import { SectionLabel } from "@/components/sectionLabel";

const PILLARS = ["Irish-based", "EU-aligned", "Independent", "Sovereign"] as const;

export function SovereignByDesign() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Column 1: Label + Heading */}
          <div>
            <SectionLabel>Sovereign By Design</SectionLabel>
            <h2 className="mt-2 text-2xl font-bold leading-snug text-white">
              Sovereign Infrastructure.
              <br />
              Built in Ireland.
            </h2>
          </div>

          {/* Column 2: Description */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-zinc-400">
              An independent Irish company designing systems aligned with
              European regulatory, security, and assurance requirements.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Built for environments where control, trust, and compliance are
              critical.
            </p>
          </div>

          {/* Column 3: Bullet list */}
          <ul className="flex flex-col gap-3">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}