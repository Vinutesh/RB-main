import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { InteriorSubNav } from '../../components/InteriorSubNav';
import { Seo } from '../../components/Seo';
import { buildWhatsAppLink, contactDetails } from '../../data/siteData';

export function InteriorContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const wa = buildWhatsAppLink('Hello R.B Interiors, I would like to book an interior consultation.');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  useEffect(() => {
    if (!submitted) {
      return;
    }
    const timer = window.setTimeout(() => setSubmitted(false), 2800);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      <Seo title="Interiors Contact | R.B Interiors" description="Contact form and direct consultation CTAs for R.B Interiors." />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-(--accent-soft)">Interiors Contact</h1>
        <p className="mt-4 text-(--text-soft)">Discuss your residential or commercial interior requirement.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm">
            ← Back to R.B Enterprises
          </Link>
        </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InteriorSubNav />
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-xl font-semibold">Book Consultation</h2>
          <form className="mt-4 space-y-4" onSubmit={onSubmit}>
            <label className="block text-sm text-(--text-soft)">
              Name
              <input required className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-(--text-soft)">
              Phone
              <input required type="tel" className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-(--text-soft)">
              Email (optional)
              <input type="email" className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-(--text-soft)">
              Message
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-3" />
            </label>
            <p className="text-xs text-(--text-soft)">
              By submitting this form, you agree to be contacted via phone/WhatsApp/email.
              We do not sell your personal information.
            </p>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center rounded-full bg-(--accent) px-6 py-3 font-semibold text-black"
            >
              Submit Consultation Request
            </button>
          </form>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-xl font-semibold">Quick Connect</h2>
          <div className="mt-4 flex flex-col gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Book Interior Consultation (WhatsApp)
            </a>
            <a href={`tel:${contactDetails.phoneRaw}`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Call for Consultation
            </a>
            <a href={`mailto:${contactDetails.email}`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Email Interiors Team
            </a>
          </div>
        </article>
      </section>

      {submitted && (
        <div className="fixed right-4 top-24 z-60 rounded-xl border border-emerald-600/40 bg-emerald-900/85 px-4 py-3 text-sm text-emerald-200">
          Consultation request submitted.
        </div>
      )}
    </>
  );
}
