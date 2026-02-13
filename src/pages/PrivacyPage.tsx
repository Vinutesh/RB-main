import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy | R.B Enterprises" description="Privacy policy for enquiry data handling at R.B Enterprises and R.B Interiors." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-(--accent-soft)">Privacy Policy</h1>
        <div className="mt-5 space-y-4 text-sm text-(--text-soft)">
          <p>We collect contact details only to respond to hardware and interior enquiries.</p>
          <p>Enquiry information is used for communication via phone, WhatsApp, and email.</p>
          <p>We do not sell your personal information to third parties.</p>
        </div>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm text-(--accent-soft)">
          Back to Home
        </Link>
        </div>
      </section>
    </>
  );
}
