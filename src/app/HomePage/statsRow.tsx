import Image from "next/image";
import { CirclePlus, Clock, CircleX } from "lucide-react";

interface StatBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 rounded-3xl px-4 py-6 sm:p-8 lg:p-10">
      <span className="text-zinc-300 shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-tight truncate">
          {value}
        </p>
        <p className="text-sm sm:text-md text-zinc-400 truncate">{label}</p>
      </div>
    </div>
  );
}

const STATS: StatBadgeProps[] = [
  {
    icon: <CirclePlus size={36} strokeWidth={1} className="sm:w-[44px] sm:h-[44px] lg:w-[50px] lg:h-[50px]" />,
    value: "99.99%",
    label: "System Reliability",
  },
  {
    icon: <Clock size={36} strokeWidth={1} className="sm:w-[44px] sm:h-[44px] lg:w-[50px] lg:h-[50px]" />,
    value: "24/7",
    label: "Operational Continuity",
  },
  {
    icon: <CircleX size={36} strokeWidth={1} className="sm:w-[44px] sm:h-[44px] lg:w-[50px] lg:h-[50px]" />,
    value: "Zero Trust",
    label: "Security Model",
  },
  {
    icon: (
      <Image
        src="/icons/audit.png"
        className="pointer-events-none w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px]"
        alt="Operational Platforms"
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
    <div className="bg-[#070E13] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-0">
      {STATS.map((stat) => (
        <StatBadge key={stat.label} {...stat} />
      ))}
    </div>
  );
}