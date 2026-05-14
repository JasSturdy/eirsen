import { SectionLabel } from "@/components/sectionLabel";
import { Flag, LockKeyhole } from "lucide-react";

function EuIcon() {
  const stars = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
    const x = 50 + Math.cos(angle) * 35;
    const y = 50 + Math.sin(angle) * 35;

    return (
      <text
        key={index}
        x={x}
        y={y}
        dominantBaseline="middle"
        fontSize="10"
        textAnchor="middle"
      >
        ★
      </text>
    );
  });

  return (
    <svg
      aria-hidden
      className="h-16 w-16 text-white"
      fill="currentColor"
      viewBox="0 0 100 100"
    >
      {stars}
      <text
        x="50"
        y="57"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="700"
        textAnchor="middle"
      >
        EU
      </text>
    </svg>
  );
}

const sovereignMarkers = [
  { label: "Independent", icon: <Flag size={64} strokeWidth={1.8} /> },
  { label: "EU Aligned", icon: <EuIcon /> },
  { label: "Security", icon: <LockKeyhole size={64} strokeWidth={1.8} /> },
] as const;

export function SovereignPositionSection() {
  return (
    <section>
      <div className="mx-auto max-w-[1802px] rounded-[17px] border border-[#2b2b2b] bg-[#101316] bg-[radial-gradient(circle_at_center_top,rgba(140,196,63,0.2),rgba(16,19,22,0.55)_34%,#101316_72%)] p-8 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Sovereign Position</SectionLabel>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-white lg:text-6xl">
              Sovereign Design
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.75fr_0.7fr]">
            <p className="text-lg font-medium leading-8 tracking-wide text-zinc-100">
              We operate with full control over how systems are designed, implemented and governed.
            </p>
            {sovereignMarkers.map(({ label, icon }) => (
              <div key={label} className="flex flex-col items-start gap-5 text-white">
                {icon}
                <p className="text-lg font-medium text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
