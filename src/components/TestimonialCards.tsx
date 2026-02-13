interface TestimonialItem {
  name: string;
  role: string;
  note: string;
}

interface TestimonialCardsProps {
  items: TestimonialItem[];
}

export function TestimonialCards({ items }: TestimonialCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="glass-panel rounded-xl p-5">
          <p className="text-(--accent-soft)">?????</p>
          <p className="mt-3 text-sm text-(--text-main)">{item.note}</p>
          <p className="mt-4 text-sm font-semibold text-(--text-main)">{item.name}</p>
          <p className="text-xs text-(--text-soft)">{item.role} | Sample placeholder testimonial</p>
        </article>
      ))}
    </div>
  );
}
