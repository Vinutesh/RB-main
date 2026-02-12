import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink, contactDetails } from '../data/siteData';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const hardwareWa = buildWhatsAppLink('Hello R.B Enterprises, I would like hardware support.');
  const interiorsWa = buildWhatsAppLink('Hello R.B Interiors, I want to book an interior consultation.');

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
      <Seo
        title="Contact | R.B Enterprises & R.B Interiors"
        description="Contact R.B Enterprises for hardware enquiries and R.B Interiors for design consultation."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-[var(--accent-soft)]">Contact</h1>
        <p className="mt-4 text-[var(--text-soft)]">Send project details for hardware supply or interior execution consultation.</p>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-xl font-semibold">Send an Enquiry</h2>
          <form className="mt-4 space-y-4" onSubmit={onSubmit}>
            <label className="block text-sm text-[var(--text-soft)]">
              Name
              <input required className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-[var(--text-soft)]">
              Phone
              <input required type="tel" className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-[var(--text-soft)]">
              Email (optional)
              <input type="email" className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3" />
            </label>
            <label className="block text-sm text-[var(--text-soft)]">
              Select inquiry type
              <select required className="mt-1 min-h-12 w-full rounded-xl border border-white/15 bg-black/20 px-3">
                <option value="">Choose one</option>
                <option value="hardware">Hardware</option>
                <option value="interiors">Interiors</option>
              </select>
            </label>
            <label className="block text-sm text-[var(--text-soft)]">
              Message
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-3" />
            </label>
            <p className="text-xs text-[var(--text-soft)]">
              By submitting this form, you agree to be contacted via phone/WhatsApp/email.
              We do not sell your personal information.
            </p>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-black"
            >
              Submit Enquiry
            </button>
          </form>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#141414] p-6">
          <h2 className="text-xl font-semibold">Direct Contact Options</h2>
          <div className="mt-5 flex flex-col gap-3">
            <a href={hardwareWa} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Enquire for Hardware (WhatsApp)
            </a>
            <a href={interiorsWa} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Book Interior Consultation (WhatsApp)
            </a>
            <a href={`tel:${contactDetails.phoneRaw}`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Call Now
            </a>
            <a href={`mailto:${contactDetails.email}`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-4">
              Email Us
            </a>
          </div>

          <div className="mt-8 text-sm text-[var(--text-soft)]">
            <p className="font-semibold text-[var(--text-main)]">Address</p>
            <p className="mt-2">{contactDetails.address}</p>
          </div>

          <iframe
            title="R.B location placeholder"
            src="https://www.google.com/maps?q=Bengaluru&output=embed"
            loading="lazy"
            className="mt-6 h-56 w-full rounded-2xl border border-white/15"
          />
        </article>
      </section>

      {submitted && (
        <div className="fixed right-4 top-24 z-[60] rounded-xl border border-emerald-600/40 bg-emerald-900/85 px-4 py-3 text-sm text-emerald-200">
          Enquiry submitted successfully.
        </div>
      )}
    </>
  );
}
