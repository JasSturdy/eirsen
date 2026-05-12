interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-2 text-xs font-semibold uppercase tracking-widest text-green-400 ${className}`}
    >
      — {children}
    </p>
  );
}