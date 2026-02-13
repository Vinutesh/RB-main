import { Link } from 'react-router-dom';
import { InteriorSubNav } from '../../components/InteriorSubNav';
import { Seo } from '../../components/Seo';
import { TestimonialCarousel } from '../../components/TestimonialCarousel';
import {
  buildWhatsAppLink,
  galleryImages,
  interiorMaterials,
  interiorPackages,
  projectShowcase,
  testimonials,
} from '../../data/siteData';

export function InteriorLandingPage() {
  const consultationWa = buildWhatsAppLink('Hello R.B Interiors, I want to book an interior consultation.');
  const interiorSteps = ['Consultation', 'Design', 'Material Selection', 'Execution', 'Handover'];

  return (
    <>
      <Seo
        title="Interior Designing | R.B Interiors"
        description="R.B Interiors luxury interior design and execution with curated packages and materials."
      />

      <section className="relative mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(140deg,#0f0f0f,#1a1a1a)] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-(--accent-soft)">R.B Interiors</p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-6xl">Luxury Interior Design & Execution</h1>
          <p className="mt-4 max-w-2xl text-(--text-soft)">
            Portfolio-led interior execution for residential and commercial projects with premium detailing and timeline
            accountability.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={consultationWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-(--accent) px-6 text-sm font-semibold text-black transition hover:bg-(--accent-soft) hover:shadow-xl"
            >
              Book a Consultation
            </a>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center rounded-full border border-white px-6 text-sm font-semibold text-white! transition hover:bg-white hover:text-black!"
            >
              ← Back to R.B Group
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InteriorSubNav />
      </div>

      <section className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-3xl border border-white/10 bg-[#151515] p-7">
          <h2 className="font-serif text-3xl text-white">Interior Packages</h2>
          <div className="mt-5 grid gap-3">
            {interiorPackages.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#151515] p-7">
          <h2 className="font-serif text-3xl text-white">Material Categories</h2>
          <div className="mt-5 grid gap-3">
            {interiorMaterials.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-white">Execution Process</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {interiorSteps.map((step, index) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-[#141414] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-(--accent-soft)">Step {index + 1}</p>
              <h3 className="mt-2 font-semibold">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-white">Gallery</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {galleryImages.interiors.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Interior portfolio placeholder ${index + 1}`}
              loading="lazy"
              className="h-72 w-full rounded-2xl border border-white/10 object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-white">Testimonials</h2>
        <p className="mt-2 text-sm text-(--text-soft)">Sample placeholders for presentation only.</p>
        <div className="mt-6 max-w-3xl">
          <TestimonialCarousel items={testimonials.interiors} />
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 pb-6 sm:px-6 lg:grid-cols-2 lg:px-8">
        {projectShowcase.slice(0, 2).map((project) => (
          <article key={project.name} className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
            <img src={project.image} alt={project.name} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-serif text-2xl">{project.name}</h3>
              <p className="mt-2 text-sm text-(--text-soft)">{project.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 text-center sm:p-10">
          <h2 className="font-serif text-3xl text-white">Start your interior consultation today</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={consultationWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-(--accent) px-6 text-sm font-semibold text-black transition hover:bg-(--accent-soft) hover:shadow-xl"
            >
              Book Interior Consultation
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-full border border-white px-6 text-sm font-semibold text-white! transition hover:bg-white hover:text-black!"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


