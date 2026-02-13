import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function TermsPage() {
  return (
    <>
      <Seo title="Terms & Conditions | R.B Enterprises" description="Terms and conditions for R.B Enterprises and R.B Interiors website usage." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-(--accent-soft)">Terms & Conditions</h1>
        <div className="mt-5 space-y-4 text-sm text-(--text-soft)">
          <p>Information on this website is for general business communication and portfolio presentation.</p>
          <p>Product and service availability may vary based on stock, location, and project scope.</p>
          <p>Any project engagement is subject to written commercial terms, approvals, and final quotations.</p>
        </div>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm text-(--accent-soft)]">
          Back to Home
        </Link>
        </div>
      </section>
    </>
  );
}
