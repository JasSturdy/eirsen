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
        <Card className="flex flex-col gap-8 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1">
            <div className="green">{icon}</div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <hr className="border-zinc-700 w-1/3" />
            </div>
            <p className="text-lg leading-relaxed text-zinc-300">{description}</p>
        </Card>
    );
}

const SERVICES: ServiceCardProps[] = [
    {
        icon: <Boxes size={60} strokeWidth={0.5}/>,
        title: "Operational Infrastructure Design",
        description: "Secure system architecture for regulated environments.",
    },
    {
        icon: <ShieldCheck size={60} strokeWidth={0.5}/>,
        title: "System Integration",
        description:
            "Connecting complex systems across organisations, processes, and data.",
    },
    {
        icon: <FileSearchCorner size={60} strokeWidth={0.5}/>,
        title: "Compliance & Assurance",
        description:
            "Designing systems aligned with regulatory, audit, and certification requirements.",
    },
    {
        icon: (
            <Image
                src="/icons/operation.png"
                className="pointer-events-none"
                alt="Operational Platforms"
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
        <section className="relative w-full mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-green sm:text-4xl lg:text-5xl">What We Do</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
}
