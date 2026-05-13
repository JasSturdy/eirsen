import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  hover = true,
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  const base =
    "rounded-[8px] border border-white/20 bg-[#070E13] backdrop-blur-sm";

  const hoverStyles = hover
    ? "transition-colors hover:border-[#8CC43F]/50 hover:bg-[#0B151B]"
    : "";

  const paddings = {
    sm: "p-5",
    md: "p-6",
    lg: "p-8 lg:p-12",
  };

  return (
    <div
      className={`${base} ${hoverStyles} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
