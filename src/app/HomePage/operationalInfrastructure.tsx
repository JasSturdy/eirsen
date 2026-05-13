import { SectionLabel } from "@/components/sectionLabel";
import { Eye, Lock } from "lucide-react";
import Image from "next/image";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PillarCard({
  icon,
  title,
  description,
  className,
}: PillarCardProps & { className?: string }) {
  return (
    <div
      className={`flex min-h-[240px] flex-col gap-[14px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 ${className}`}
    >
      <div className="h-20 text-green">{icon}</div>
      <h3 className="text-lg font-semibold leading-[30px] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl">
        {title}
      </h3>
      <p className="max-w-[390px] text-base font-medium leading-[1.55] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl lg:leading-[30px]">
        {description}
      </p>
    </div>
  );
}

const PILLARS: PillarCardProps[] = [
  {
    icon: (
      <Image
        src="/icons/resilience.png"
        className="pointer-events-none"
        alt=""
        width={60}
        height={60}
      />
    ),
    title: "Resilience",
    description:
      "Architected for high availability, fault tolerance, and operational continuity.",
  },
  {
    icon: <Eye size={60} strokeWidth={0.8} />,
    title: "Visibility",
    description:
      "Real-time observability across systems, infrastructure, and operational layers.",
  },
  {
    icon: (
      <Image
        src="/icons/coordination.png"
        className="pointer-events-none"
        alt=""
        width={70}
        height={70}
      />
    ),
    title: "Coordination",
    description:
      "Integrated systems working in sync across people, processes, and technology.",
  },
  {
    icon: <Lock size={60} strokeWidth={0.8} />,
    title: "Control",
    description:
      "Governed access, change control, and automated safeguards at every layer.",
  },
];

const PILLAR_CLASSES = [
  "lg:pr-8",
  "sm:border-l sm:border-white/20 sm:pl-8 lg:px-12",
  "lg:border-l lg:border-white/20 lg:px-12",
  "sm:border-l sm:border-white/20 sm:pl-8 lg:pl-12 lg:pr-0",
];

export function OperationalInfrastructure() {
  return (
    <section>
      <SectionLabel>Operational Infrastructure</SectionLabel>
      <h2 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-[50px] lg:leading-[75px]">
        The Foundation of every System We Design
      </h2>
      <p className="mb-16 mt-3 text-lg font-medium leading-[30px] tracking-[0.02em] text-[#EFEBEB] lg:text-2xl">
        Resilience, visibility, coordination, and control.
      </p>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {PILLARS.map((pillar, i) => (
          <PillarCard
            key={pillar.title}
            {...pillar}
            className={PILLAR_CLASSES[i]}
          />
        ))}
      </div>
    </section>
  );
}
