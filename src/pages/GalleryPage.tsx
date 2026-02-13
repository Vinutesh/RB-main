import { useState } from 'react';
import { Seo } from '../components/Seo';
import { galleryImages } from '../data/siteData';

export function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Seo
        title="Gallery | R.B Enterprises & R.B Interiors"
        description="Project gallery featuring hardware display visuals and interior project snapshots."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
        <h1 className="font-serif text-4xl text-(--accent-soft)">Gallery</h1>
        <p className="mt-4 text-(--text-soft)">Hardware visuals and interior before/after style placeholders.</p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Hardware Showcase</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {galleryImages.hardware.map((image, index) => (
            <button key={image} type="button" className="overflow-hidden rounded-2xl border border-white/10" onClick={() => setSelected(image)}>
              <img
              src={image}
              alt={`Hardware display placeholder ${index + 1}`}
              loading="lazy"
              className="h-60 w-full object-cover transition duration-300 hover:scale-105"
            />
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Interior Project Showcase</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {galleryImages.interiors.map((image, index) => (
            <button key={image} type="button" className="overflow-hidden rounded-2xl border border-white/10" onClick={() => setSelected(image)}>
              <img
              src={image}
              alt={`Interior project placeholder ${index + 1}`}
              loading="lazy"
              className="h-60 w-full object-cover transition duration-300 hover:scale-105"
            />
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 px-4" onClick={() => setSelected(null)} role="presentation">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white"
            >
              X
            </button>
            <img src={selected} alt="Expanded gallery view" className="max-h-[85vh] w-full rounded-2xl object-cover" />
          </div>
        </div>
      )}
    </>
  );
}
