interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-4 text-sm font-medium uppercase tracking-[0.04em] text-green ${className}`}
    >
      - {children}
    </p>
  );
}
