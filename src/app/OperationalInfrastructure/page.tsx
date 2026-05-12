import { SectionLabel } from "@/components/sectionLabel";
import {
  RefreshCw,
  Eye,
  GitMerge,
  Lock,
  Clock,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-green-400">{icon}</div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-400">{icon}</span>
      <div>
        <p className="text-lg font-bold text-white">{value}</p>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
}

const PILLARS: PillarCardProps[] = [
  {
    icon: <RefreshCw size={28} />,
    title: "Resilience",
    description:
      "Architected for high availability, fault tolerance, and operational continuity.",
  },
  {
    icon: <Eye size={28} />,
    title: "Visibility",
    description:
      "Real-time observability across systems, infrastructure, and operational layers.",
  },
  {
    icon: <GitMerge size={28} />,
    title: "Coordination",
    description:
      "Integrated systems working in sync across people, processes, and technology.",
  },
  {
    icon: <Lock size={28} />,
    title: "Control",
    description:
      "Governed access, change control, and automated safeguards at every layer.",
  },
];

const STATS: StatBadgeProps[] = [
  { icon: <Clock size={20} />, value: "99.99%", label: "System Reliability" },
  { icon: <Clock size={20} />, value: "24/7", label: "Operational Continuity" },
  { icon: <ShieldCheck size={20} />, value: "Zero Trust", label: "Security Model" },
  { icon: <ClipboardCheck size={20} />, value: "Audit Ready", label: "Built for Assurance" },
];

export function OperationalInfrastructure() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionLabel>Operational Infrastructure</SectionLabel>
      <h2 className="mb-2 text-2xl font-bold text-white">
        The Foundation of every System We Design
      </h2>
      <p className="mb-16 text-sm text-zinc-500">
        Resilience, visibility, coordination, and control.
      </p>

      {/* Pillar cards */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar) => (
          <PillarCard key={pillar.title} {...pillar} />
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-16 sm:grid-cols-4">
        {STATS.map((stat) => (
          <StatBadge key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}