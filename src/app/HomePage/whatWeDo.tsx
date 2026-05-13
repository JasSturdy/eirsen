import { Card } from "@/components/card";
import { Boxes, FileSearchCorner, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="flex min-h-[250px] flex-col gap-8 px-6 py-6 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:min-h-[260px] lg:px-10 lg:py-8">
      <div className="text-green">{icon}</div>
      <div className="flex flex-col gap-5">
        <h3 className="min-h-[60px] text-lg font-semibold leading-[30px] tracking-[0.02em] text-white lg:text-2xl">
          {title}
        </h3>
        <hr className="w-[120px] border-white/25" />
      </div>
      <p className="text-base font-medium leading-[1.55] tracking-[0.02em] text-white lg:text-2xl lg:leading-[30px]">
        {description}
      </p>
    </Card>
  );
}

const SERVICES: ServiceCardProps[] = [
  {
    icon: <Boxes size={60} strokeWidth={0.8} />,
    title: "Operational Infrastructure Design",
    description: "Secure system architecture for regulated environments.",
  },
  {
    icon: <ShieldCheck size={60} strokeWidth={0.8} />,
    title: "System Integration",
    description:
      "Connecting complex systems across organisations, processes, and data.",
  },
  {
    icon: <FileSearchCorner size={60} strokeWidth={0.8} />,
    title: "Compliance & Assurance",
    description:
      "Designing systems aligned with regulatory, audit, and certification requirements.",
  },
  {
    icon: (
      <Image
        src="/icons/operation.png"
        className="pointer-events-none"
        alt=""
        width={60}
        height={60}
      />
    ),
    title: "Operational Platforms",
    description:
      "Building systems that support real-world operations in high-assurance environments.",
  },
];

export function WhatWeDo() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-medium tracking-[-0.03em] text-green sm:text-4xl lg:text-[50px] lg:leading-[75px]">
        What We Do
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
