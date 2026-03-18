interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function SectionWrapper({
  children,
  className,
  id,
  style,
}: SectionWrapperProps) {
  return (
    <section className={`py-16 md:py-20 ${className ?? ""}`} id={id} style={style}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
