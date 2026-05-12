import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "outline",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400";

  const variants = {
    outline:
      "border border-[#8CC43F] text-[#8CC43F] hover:bg-lime-300 hover:text-black",
    solid:
      "bg-[#8CC43F] text-[#04080B] hover:bg-lime-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-base",
  };

  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}