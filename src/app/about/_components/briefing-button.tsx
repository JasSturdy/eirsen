import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";

interface BriefingButtonProps {
  className?: string;
}

export function BriefingButton({ className = "" }: BriefingButtonProps) {
  return (
    <Button href="/Contact" variant="solid" size="sm" className={className}>
      Request Briefing
      <ArrowRight size={16} strokeWidth={2} />
    </Button>
  );
}
