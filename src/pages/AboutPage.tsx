import { Seo } from '../components/Seo';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | R.B Enterprises & R.B Interiors"
        description="About R.B Enterprises hardware wholesale and R.B Interiors interior design and execution verticals."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-[var(--accent-soft)]">About Us</h1>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          R.B Enterprises and R.B Interiors operate under one ownership model with clearly separated service verticals.
          This structure helps project teams source products and execute interiors through coordinated specialists.
        </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-2xl font-semibold">R.B Enterprises</h2>
          <p className="mt-3 text-[var(--text-soft)]">
            Wholesale interior hardware supplier focused on B2B requirements including contractors, builders, and
            procurement teams.
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-2xl font-semibold">R.B Interiors</h2>
          <p className="mt-3 text-[var(--text-soft)]">
            Interior design and execution partner delivering residential and commercial interior environments with quality
            process controls.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="mt-3 max-w-4xl text-[var(--text-soft)]">
          Built on practical trade experience, the business evolved from hardware supply to complete interior delivery.
          The goal is straightforward: provide dependable products, disciplined planning, and clean execution standards.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Core Values</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Quality Focus', 'Transparent Communication', 'Execution Discipline', 'Long-Term Relationships'].map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-sm text-[var(--text-soft)]">
              <h3 className="font-semibold text-[var(--text-main)]">{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
