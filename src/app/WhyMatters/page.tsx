import { Card } from "@/components/card";
import {
  RefreshCcw,
  BrickWallShield,
  UserRoundCog,
  Landmark,
} from "lucide-react";

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <Card padding="lg" className="flex flex-col gap-4">
      <div>{icon}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </Card>
  );
}

const REASONS: ReasonCardProps[] = [
  {
    icon: <RefreshCcw />,
    title: "Operational Continuity",
    description: "Systems designed to maintain service under pressure.",
  },
  {
    icon: <BrickWallShield />,
    title: "Secure Infrastructure",
    description:
      "Security embedded across systems, data, and operational layers.",
  },
  {
    icon: <UserRoundCog />,
    title: "Resilience Engineering",
    description: "Architected to withstand disruption, failure, and change.",
  },
  {
    icon: <Landmark />,
    title: "Governance and Control",
    description:
      "Auditability, traceability, and controlled access by design.",
  },
];

export function WhyItMatters() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-2xl font-bold text-white">
        Why Operational Systems Matter
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </div>
    </section>
  );
}