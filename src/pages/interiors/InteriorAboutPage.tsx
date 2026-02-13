import { Link } from 'react-router-dom';
import { InteriorSubNav } from '../../components/InteriorSubNav';
import { Seo } from '../../components/Seo';

export function InteriorAboutPage() {
  return (
    <>
      <Seo
        title="Interiors About | R.B Interiors"
        description="Design philosophy and execution quality approach of R.B Interiors."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-[var(--accent-soft)]">R.B Interiors - About</h1>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          R.B Interiors focuses on design clarity, practical detailing, and accountable execution from concept to handover.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm">
            Explore RB Hardware
          </Link>
        </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InteriorSubNav />
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          'Design-first planning with site reality in mind.',
          'Material and finish selection aligned to budget and longevity.',
          'Execution monitoring with milestone-based quality checks.',
        ].map((point) => (
          <article key={point} className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-sm text-[var(--text-soft)]">
            {point}
          </article>
        ))}
      </section>
    </>
  );
}
