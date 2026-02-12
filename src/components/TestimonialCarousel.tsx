import { useEffect, useState } from 'react';

interface TestimonialItem {
  name: string;
  role: string;
  note: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const prev = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  const current = items[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#151515] p-6 sm:p-8">
      <p className="text-[var(--accent-soft)]">★★★★★</p>
      <p className="mt-3 max-w-2xl text-lg text-white">{current.note}</p>
      <p className="mt-6 text-sm font-medium text-white">{current.name}</p>
      <p className="text-xs text-[var(--text-soft)]">{current.role} | Sample testimonial placeholder</p>
      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={prev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-black"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-black"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
}
