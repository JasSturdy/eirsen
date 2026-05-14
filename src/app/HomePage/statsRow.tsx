import { CirclePlus, CircleX, Clock } from "lucide-react";
import Image from "next/image";

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <div className="flex min-w-0 items-center justify-center gap-3 px-4 py-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 sm:gap-4 sm:px-6 sm:py-5 lg:gap-[18px] lg:px-10">
      <span className="shrink-0 text-zinc-300">{icon}</span>
      <div className="min-w-0">
        <p className="truncate text-xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-2xl lg:text-[34px] lg:leading-[68px]">
          {value}
        </p>
        <p className="truncate text-xs font-medium tracking-[0.02em] text-white sm:text-sm lg:text-[18px] lg:leading-[27px]">
          {label}
        </p>
      </div>
    </div>
  );
}

function MobileStatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <div className="flex min-w-0 items-center gap-3 px-4 py-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1">
      <span className="shrink-0 text-zinc-300 [&>svg]:h-8 [&>svg]:w-8 [&>img]:!h-7 [&>img]:!w-7">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="truncate text-lg font-medium leading-tight tracking-[-0.03em] text-white">
          {value}
        </p>
        <p className="truncate text-xs font-medium tracking-[0.02em] text-white/80">
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
      <div className="mx-auto grid max-w-[1927px] grid-cols-2 gap-x-0 gap-y-0 divide-x divide-y divide-white/10 px-0 sm:hidden">
        {STATS.map((stat) => (
          <MobileStatBadge key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mx-auto hidden max-w-[1927px] grid-cols-2 gap-2 px-4 py-4 sm:grid lg:grid-cols-4 lg:px-[50px] lg:py-8">
        {STATS.map((stat) => (
          <StatBadge key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}