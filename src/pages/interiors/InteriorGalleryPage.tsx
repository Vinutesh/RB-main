import { Link } from 'react-router-dom';
import { InteriorSubNav } from '../../components/InteriorSubNav';
import { Seo } from '../../components/Seo';
import { galleryImages } from '../../data/siteData';

export function InteriorGalleryPage() {
  return (
    <>
      <Seo title="Interiors Gallery | R.B Interiors" description="Interior-only project gallery placeholders for R.B Interiors." />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-(--accent-soft)">Interior Gallery</h1>
        <p className="mt-4 text-(--text-soft)">Interior project visuals only. Hardware catalog is intentionally excluded here.</p>
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

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-8 sm:grid-cols-2 sm:px-6 lg:px-8">
        {galleryImages.interiors.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Interior-only project placeholder ${index + 1}`}
            loading="lazy"
            className="h-64 w-full rounded-2xl border border-white/10 object-cover"
          />
        ))}
      </section>
    </>
  );
}
