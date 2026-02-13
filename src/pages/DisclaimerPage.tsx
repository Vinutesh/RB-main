import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function DisclaimerPage() {
  return (
    <>
      <Seo title="Disclaimer | R.B Enterprises" description="Website disclaimer for R.B Enterprises and R.B Interiors." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
          <h1 className="font-serif text-4xl text-[var(--accent-soft)]">Disclaimer</h1>
          <div className="mt-6 space-y-4 text-sm text-[var(--text-soft)]">
            <p>Images shown are for illustration and portfolio purposes only.</p>
            <p>Availability of products and services may vary based on project scope, region, and stock.</p>
            <p>All trademarks, logos, and brand names belong to their respective owners.</p>
          </div>
          <Link to="/" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm hover:bg-white hover:text-black">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
