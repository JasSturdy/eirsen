interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-4 text-sm uppercase tracking-widest text-green ${className}`}
    >
      — {children}
    </p>
  );
}