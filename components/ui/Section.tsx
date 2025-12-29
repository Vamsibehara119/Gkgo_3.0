interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest">
        {title}
      </h3>
      {children}
    </section>
  );
}