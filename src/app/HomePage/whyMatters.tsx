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
    <Card padding="lg" className="flex flex-col gap-4 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1">
      <div className="green">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-md leading-relaxed text-zinc-300">{description}</p>
    </Card>
  );
}

const REASONS: ReasonCardProps[] = [
  {
    icon: <RefreshCcw size={60} strokeWidth={0.5}/>,
    title: "Operational Continuity",
    description: "Systems designed to maintain service under pressure.",
  },
  {
    icon: <BrickWallShield size={60} strokeWidth={0.5}/>,
    title: "Secure Infrastructure",
    description:
      "Security embedded across systems, data, and operational layers.",
  },
  {
    icon: <UserRoundCog size={60} strokeWidth={0.5}/>,
    title: "Resilience Engineering",
    description: "Architected to withstand disruption, failure, and change.",
  },
  {
    icon: <Landmark size={60} strokeWidth={0.5}/>,
    title: "Governance and Control",
    description:
      "Auditability, traceability, and controlled access by design.",
  },
];

export function WhyItMatters() {
  return (
    <section className="mx-auto">
      <h2 className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl text-white">
        Why Operational Systems Matter
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </div>
    </section>
  );
}
