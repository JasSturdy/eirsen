import { CirclePlus, CircleX, Clock } from "lucide-react";
import Image from "next/image";

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <div className="flex min-w-0 items-center justify-center gap-4 px-6 py-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:gap-[18px] lg:px-10">
      <span className="shrink-0 text-zinc-300">{icon}</span>
      <div className="min-w-0">
        <p className="truncate text-2xl font-medium leading-tight tracking-[-0.03em] text-white lg:text-[45px] lg:leading-[68px]">
          {value}
        </p>
        <p className="truncate text-sm font-medium tracking-[0.02em] text-white lg:text-[22px] lg:leading-[27px]">
          {label}
        </p>
      </div>
    </div>
  );
}

const STATS: StatBadgeProps[] = [
  {
    icon: <CirclePlus size={50} strokeWidth={1} />,
    value: "99.99%",
    label: "System Reliability",
  },
  {
    icon: <Clock size={50} strokeWidth={1} />,
    value: "24/7",
    label: "Operational Continuity",
  },
  {
    icon: <CircleX size={50} strokeWidth={1} />,
    value: "Zero Trust",
    label: "Security Model",
  },
  {
    icon: (
      <Image
        src="/icons/audit.png"
        className="pointer-events-none h-[45px] w-[45px]"
        alt=""
        width={45}
        height={45}
      />
    ),
    value: "Audit Ready",
    label: "Built for Assurance",
  },
];

export function StatsRow() {
  return (
    <section className="bg-[#070E13]">
      <div className="mx-auto grid max-w-[1927px] grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-[50px] lg:py-8">
        {STATS.map((stat) => (
          <StatBadge key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
