import { SectionLabel } from "@/components/sectionLabel";
import {
  Eye,
  Lock,
} from "lucide-react";
import Image from "next/image";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PillarCard({ icon, title, description, className }: PillarCardProps & { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="text-green">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-md leading-relaxed text-zinc-300">{description}</p>
    </div>
  );
}

const PILLARS: PillarCardProps[] = [
  {
    icon: (
      <Image
        src="/icons/resilience.png"
        className="pointer-events-none"
        alt="Resilience"
        width={60}
        height={60}
      />
    ),
    title: "Resilience",
    description:
      "Architected for high availability, fault tolerance, and operational continuity.",
  },
  {
    icon: <Eye size={60} strokeWidth={0.5} />,
    title: "Visibility",
    description:
      "Real-time observability across systems, infrastructure, and operational layers.",
  },
  {
    icon: (
      <Image
        src="/icons/coordination.png"
        className="pointer-events-none"
        alt="Coordination"
        width={70}
        height={70}
      />
    ),
    title: "Coordination",
    description:
      "Integrated systems working in sync across people, processes, and technology.",
  },
  {
    icon: <Lock size={60} strokeWidth={0.5} />,
    title: "Control",
    description:
      "Governed access, change control, and automated safeguards at every layer.",
  },
];

const PILLAR_CLASSES = [
  // index 0 — no divider anywhere
  "lg:pr-8",
  // index 1 — divider left on tablet and desktop
  "sm:border-l sm:border-zinc-700 sm:pl-8 lg:px-8",
  // index 2 — divider left on desktop only
  "lg:border-l lg:border-zinc-700 lg:px-8",
  // index 3 — divider left on tablet and desktop
  "sm:border-l sm:border-zinc-700 sm:pl-8 lg:px-8 lg:pr-0",
];

export function OperationalInfrastructure() {
  return (
    <section className="mx-auto">
      <SectionLabel>Operational Infrastructure</SectionLabel>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
        The Foundation of every System We Design
      </h2>
      <p className="mt-6 mb-16 text-lg text-zinc-300">
        Resilience, visibility, coordination, and control.
      </p>

      {/* Pillar cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {PILLARS.map((pillar, i) => (
          <PillarCard key={pillar.title} {...pillar} className={PILLAR_CLASSES[i]} />
        ))}
      </div>
    </section>
  );
}