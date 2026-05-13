import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Lock,
  Monitor,
  Network,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export const requirements = [
  "Compliance is operationally non-negotiable",
  "Systems must remain fully auditable internally",
  "Security embedded across infrastructure systems",
  "Operational continuity remains critically essential",
];

export const systems: Array<{ icon: LucideIcon; text: string }> = [
  {
    icon: Lock,
    text: "Systems that operate reliably in complex, regulated environments.",
  },
  {
    icon: Monitor,
    text: "Infrastructure coordinating organisations, systems, and data.",
  },
  {
    icon: ShieldCheck,
    text: "Platforms designed for long-term governance and assurance.",
  },
];

export const principles: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    title: "Resilience",
    text: "Built to withstand and adapt",
    icon: RotateCcw,
  },
  {
    title: "Visibility",
    text: "Clear insight and operations",
    icon: Eye,
  },
  {
    title: "Coordination",
    text: "Systems across environments",
    icon: Network,
  },
  {
    title: "Control",
    text: "Secure, governed, accountable",
    icon: ShieldCheck,
  },
];

export const sectors = [
  "Defence",
  "Healthcare and medical systems",
  "Telecommunications infrastructure",
  "National and public sector systems",
];
