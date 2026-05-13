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
    "inline-flex items-center justify-center gap-3 rounded-[7px] font-semibold tracking-[0.03em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400";

  const variants = {
    outline:
      "border border-[#8CC43F] text-[#8CC43F] hover:bg-[#8CC43F] hover:text-[#04080B]",
    solid:
      "border border-[#8CC43F] bg-[#8CC43F] text-[#0D0F12] hover:border-[#A4D65E] hover:bg-[#A4D65E]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "h-[44px] px-6 text-sm",
    lg: "h-[71px] px-8 text-2xl",
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
