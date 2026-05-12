import { SectionLabel } from "@/components/sectionLabel";
import { Card } from "@/components/card";
import Image from "next/image";
import {
    Lock,
    UserCog,
    ArrowUpDown,
    ShieldCheck,
    FileSearchCorner,
    ClipboardClock,
} from "lucide-react";

const FEATURES = [
    { icon: <Lock size={40} strokeWidth={0.5} />, label: "Controlled Access" },
    { icon: <UserCog size={40} strokeWidth={0.5} />, label: "Role-based Permissions" },
    { icon: <FileSearchCorner size={40} strokeWidth={0.5} />, label: "Document Traceability" },
    { icon: <ClipboardClock size={40} strokeWidth={0.5} />, label: "Audit Logging" },
    { icon: <ArrowUpDown size={40} strokeWidth={0.5} />, label: "Secure Upload and Download" },
    { icon: <ShieldCheck size={40} strokeWidth={0.5} />, label: "Restricted User Access" },
] as const;

export function SecurityAssurance() {
    return (
        <section className="mx-auto">
            <Card className="p-0 overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                    {/* Left */}
                    <div className="relative w-full lg:w-[300px] xl:w-[380px] shrink-0 min-h-[200px] sm:min-h-[260px] lg:min-h-0">
                        <Image
                            src="/shield.png"
                            alt="Security Shield"
                            fill
                            className="object-contain object-center"
                        />
                    </div>

                    {/* Right */}
                    <div className="flex flex-col justify-center gap-6 p-6 sm:p-10 lg:p-12">
                        <div>
                            <SectionLabel>Security & Assurance</SectionLabel>
                            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-white">
                                Built for Regulated Environments
                            </h2>
                            <p className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                                Designed to support secure access, controlled document exchange, and operational assurance.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-white/10 pt-6">
                            {FEATURES.map(({ icon, label }, index) => (
                                <div
                                    key={label}
                                    className={`flex flex-col items-center gap-2 text-center lg:border-r lg:border-white/10 lg:px-3 ${
                                        index === FEATURES.length - 1 ? "lg:border-0" : ""
                                    }`}
                                >
                                    <span className="text-green">{icon}</span>
                                    <p className="text-xs sm:text-sm text-white">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Card>
        </section>
    );
}