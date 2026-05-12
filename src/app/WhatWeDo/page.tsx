import { Card } from "@/components/card";
import Image from "next/image";

import {
    ShieldCheck,
    FileSearchCorner,
    Boxes,
} from "lucide-react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <Card className="flex flex-col gap-4">
            <div>{icon}</div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
        </Card>
    );
}

const SERVICES: ServiceCardProps[] = [
    {
        icon: <Boxes />,
        title: "Operational Infrastructure Design",
        description: "Secure system architecture for regulated environments.",
    },
    {
        icon: <ShieldCheck />,
        title: "System Integration",
        description:
            "Connecting complex systems across organisations, processes, and data.",
    },
    {
        icon: <FileSearchCorner />,
        title: "Compliance & Assurance",
        description:
            "Designing systems aligned with regulatory, audit, and certification requirements.",
    },
    {
        icon: (
            <Image
                src="/icons/operational-platforms.png"
                alt="Operational Platforms"
                width={28}
                height={28}
            />
        ),
        title: "Operational Platforms",
        description:
            "Building systems that support real-world operations in high-assurance environments.",
    },
];

export function WhatWeDo() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="mb-12 text-2xl font-bold text-white">What We Do</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
}