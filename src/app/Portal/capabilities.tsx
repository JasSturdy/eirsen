import { SectionLabel } from "@/components/sectionLabel";
import { Card } from "@/components/card";
import {
    FileText,
    Upload,
    ArrowLeftRight,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const CAPABILITIES = [
    {
        icon: <FileText size={60} strokeWidth={0.5} />,
        title: "Secure Document Access",
        description: "Access approved documents in a controlled environment.",
    },
    {
        icon: <Upload size={60} strokeWidth={0.5} />,
        title: "Document Uploads",
        description: "Upload files securely for review, exchange, or collaboration.",
    },
    {
        icon: <ArrowLeftRight size={60} strokeWidth={0.5} />,
        title: "Document Exchange",
        description: "Share documents with authorised users and project groups.",
    },
    {
        icon: <LockKeyhole size={60} strokeWidth={0.5} />,
        title: "Access Control",
        description: "Role-based permissions ensure users only access approved materials.",
    },
    {
        icon: <ShieldCheck size={60} strokeWidth={0.5} />,
        title: "Audit and Traceability",
        description: "Portal activity is logged to support accountability and oversight.",
    },
    {
        icon: (
            <Image
                src="/icons/teams.png"
                className="pointer-events-none"
                alt="Operational Platforms"
                width={60}
                height={60}
            />
        ),
        title: "Secure Collaboration",
        description: "Structured collaboration for partners, clients, and authorised stakeholders.",
    },
] as const;

export function Capabilities() {
    return (
        <section className="mx-auto">
            <SectionLabel>Portal Capabilities</SectionLabel>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {CAPABILITIES.map(({ icon, title, description }) => (
                    <Card key={title} className="p-6 lg:p-8 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <span className="text-green shrink-0">{icon}</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">{description}</p>
                                <span className="h-0.5 w-6 bg-green mt-2" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}