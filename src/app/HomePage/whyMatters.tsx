import { Card } from "@/components/card";
import { BrickWallShield, Landmark, RefreshCcw, UserRoundCog } from "lucide-react";

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <Card
      padding="lg"
      className="flex min-h-[260px] flex-col justify-center gap-[30px] px-8 py-8 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:min-h-[325px] lg:px-[50px]"
    >
      <div className="text-green">{icon}</div>
      <div className="flex flex-col gap-5 tracking-[0.02em]">
        <h3 className="text-xl font-semibold leading-[40px] text-[#EFEBEB] lg:text-[28px]">
          {title}
        </h3>
        <p className="max-w-[592px] text-lg font-medium leading-[30px] text-[#EFEBEB] lg:text-2xl">
          {description}
        </p>
      </div>
    </Card>
  );
}

const REASONS: ReasonCardProps[] = [
  {
    icon: <RefreshCcw size={80} strokeWidth={0.8} />,
    title: "Operational Continuity",
    description: "Systems designed to maintain service under pressure.",
  },
  {
    icon: <BrickWallShield size={80} strokeWidth={0.8} />,
    title: "Secure Infrastructure",
    description:
      "Security embedded across systems, data, and operational layers.",
  },
  {
    icon: <UserRoundCog size={80} strokeWidth={0.8} />,
    title: "Resilience Engineering",
    description: "Architected to withstand disruption, failure, and change.",
  },
  {
    icon: <Landmark size={80} strokeWidth={0.8} />,
    title: "Governance and Control",
    description:
      "Auditability, traceability, and controlled access by design.",
  },
];

export function WhyItMatters() {
  return (
    <section>
      <h2 className="mb-12 text-center text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-[50px] lg:leading-[75px]">
        Why Operational Systems Matter
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {REASONS.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </div>
    </section>
  );
}
