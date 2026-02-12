import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | R.B" description="Requested page was not found." />
      <section className="rounded-2xl border border-[var(--line)] bg-black/30 p-8">
        <h1 className="text-3xl font-bold text-[var(--accent-soft)]">Page Not Found</h1>
        <p className="mt-4 text-[var(--text-soft)]">The page you requested does not exist.</p>
        <Link to="/" className="mt-5 inline-flex min-h-11 items-center text-[var(--accent-soft)]">
          Go to Home
        </Link>
      </section>
    </>
  );
}
