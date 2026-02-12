import { motion } from 'framer-motion';
import { hoverLift } from '../components/animationConfig';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink, contactDetails, hardwareBrands, hardwareCategories } from '../data/siteData';

export function ProductPage() {
  const wa = buildWhatsAppLink('Hello R.B Enterprises, please share details for bulk hardware order enquiry.');

  return (
    <>
      <Seo
        title="Hardware Products | R.B Enterprises"
        description="Wholesale hardware catalog by R.B Enterprises including hinges, handles, locks, fittings, and accessories."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-[var(--accent-soft)]">Hardware Products</h1>
        <p className="mt-4 text-[var(--text-soft)]">
          Category-first wholesale hardware portfolio for project procurement teams.
        </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Product Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hardwareCategories.map((category) => (
            <motion.article key={category} whileHover={hoverLift} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
              <h3 className="font-semibold text-[var(--text-main)]">{category}</h3>
              <p className="mt-2 text-sm text-[var(--text-soft)]">Trade-grade options available for bulk requirements.</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Brand Tie-up Showcase</h2>
        <p className="mt-2 text-sm text-[var(--text-soft)]">Placeholder brand list ready for replacement with confirmed partners.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hardwareBrands.map((brand) => (
            <motion.article key={brand} whileHover={hoverLift} className="rounded-2xl border border-white/10 bg-[var(--bg-secondary)] p-5">
              <h3 className="font-semibold text-[var(--accent-soft)]">{brand}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Bulk Order Enquiry</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-black"
          >
            Enquire for Bulk Orders / Hardware
          </a>
          <a
            href={`tel:${contactDetails.phoneRaw}`}
            className="inline-flex min-h-12 items-center rounded-full border border-white px-5 py-3"
          >
            Call for Hardware Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
