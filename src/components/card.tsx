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
    "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm";

  const hoverStyles = hover
    ? "transition-colors hover:border-green-400/30 hover:bg-white/8"
    : "";

  const paddings = {
    sm: "p-5",
    md: "p-6",
    lg: "p-8",
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