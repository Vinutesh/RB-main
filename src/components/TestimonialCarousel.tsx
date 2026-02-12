import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { easing } from './animationConfig';

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
    }, 6000);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const prev = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  const current = items[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#151515] p-6 sm:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <p className="text-[var(--accent-soft)]">*****</p>
          <p className="mt-3 max-w-2xl text-lg text-white">{current.note}</p>
          <p className="mt-6 text-sm font-medium text-white">{current.name}</p>
          <p className="text-xs text-[var(--text-soft)]">{current.role} | Sample testimonial placeholder</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={prev}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-lg text-white transition hover:bg-white hover:text-black"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-lg text-white transition hover:bg-white hover:text-black"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to testimonial ${dotIndex + 1}`}
            className={`h-3.5 w-3.5 rounded-full transition ${dotIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
