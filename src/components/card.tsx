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
    "rounded-xl border border-zinc-700 bg-[#070E13] backdrop-blur-sm";

  const hoverStyles = hover
    ? "transition-colors hover:bg-[#16222A]"
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