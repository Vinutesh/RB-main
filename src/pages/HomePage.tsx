import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hoverLift } from '../components/animationConfig';
import { RevealSection } from '../components/RevealSection';
import { Seo } from '../components/Seo';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import {
  buildWhatsAppLink,
  contactDetails,
  heroImages,
  portfolioPreview,
  processSteps,
  projectShowcase,
  services,
  testimonials,
  trustBrands,
} from '../data/siteData';

export function HomePage() {
  const hardwareWa = buildWhatsAppLink('Hello R.B Enterprises, I want to enquire for hardware bulk supply.');

  return (
    <>
      <Seo
        title="R.B Enterprises | Wholesale Interior Hardware & Premium Interior Design Services"
        description="R.B Enterprises supplies wholesale interior hardware. R.B Interiors delivers premium interior design and execution services."
      />

      <RevealSection className="relative min-h-[100svh]">
        <img src={heroImages.architecture} alt="Modern architecture" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-40 pt-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Crafted interiors and architecture for modern living
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-[#d4d4d4] sm:text-lg">
            R.B Enterprises powers wholesale hardware supply for project teams, while R.B Interiors delivers residential
            and commercial design execution with premium planning clarity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-outline-pill inline-flex min-h-12 items-center rounded-full border border-white px-7 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Get in touch
            </Link>
            <Link
              to="/interior-designing"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-black transition hover:bg-[#e9e9e9]"
            >
              View services
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="pointer-events-auto mx-auto grid max-w-4xl gap-5 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-2xl md:grid-cols-[1.2fr_0.8fr] md:p-6">
            <div className="self-center">
              <p className="text-xs uppercase tracking-[0.22em] text-[#f3d8b2]">Smart planning</p>
              <p className="mt-3 font-serif text-2xl text-white">Data-backed design and budget clarity</p>
            </div>
            <img src={heroImages.featureCard} alt="Modern white architecture" className="h-44 w-full rounded-2xl object-cover md:h-full" />
          </article>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-white/10 bg-black/35 py-6">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-[var(--accent-soft)]">*****</p>
            <p className="mt-1 text-base text-white">Trusted delivery</p>
            <p className="text-sm text-[var(--text-soft)]">25,500+ clients served</p>
          </div>
          <div className="overflow-hidden whitespace-nowrap pl-2">
            <div className="marquee-track inline-flex gap-10 text-sm text-[var(--text-soft)]">
              <div className="marquee-group inline-flex gap-10 pr-10">
                {trustBrands.map((brand) => (
                  <span key={`a-${brand}`}>{brand}</span>
                ))}
              </div>
              <div className="marquee-group inline-flex gap-10 pr-10" aria-hidden="true">
                {trustBrands.map((brand) => (
                  <span key={`b-${brand}`}>{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">OUR PORTFOLIO</p>
        <h2 className="section-title">Past work highlights</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioPreview.map((image, index) => (
            <motion.div
              key={image}
              whileHover={hoverLift}
              className="mx-auto h-48 w-48 overflow-hidden rounded-full border border-white/15"
            >
              <img
                src={image}
                alt={`Portfolio preview ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = `https://picsum.photos/seed/rb-portfolio-fallback-${index + 1}/700/700`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">WHO WE ARE</p>
        <h2 className="section-title">Designing with purpose, building with passion</h2>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          Our structure is clear. R.B Enterprises focuses on hardware wholesale for B2B delivery, and R.B Interiors
          focuses on design-led execution. This keeps both verticals specialized while coordinating outcomes.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {['15+ Years of experience', '80+ Team members', '500+ Completed projects', '30 Industry awards'].map((item) => (
            <article key={item} className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-white">{item}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">WHAT WE OFFER</p>
        <h2 className="section-title">Services that shape lasting spaces</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={hoverLift} className="overflow-hidden rounded-3xl border border-white/10 bg-[#161616]">
              <img src={service.image} alt={service.title} className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">{service.description}</p>
                <Link
                  to={service.cta}
                  className="btn-outline-pill mt-5 inline-flex min-h-11 items-center rounded-full border border-white px-5 text-sm text-white transition hover:bg-white hover:text-black"
                >
                  Discuss this Service
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">OUR PROCESS</p>
        <h2 className="section-title">A clear and client-friendly journey from idea to delivery</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-2xl border border-white/10 bg-[#141414] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">{step.step}</p>
              <h3 className="mt-3 text-base text-white">{step.title}</h3>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">PROJECTS</p>
        <h2 className="section-title">Selected project showcase</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projectShowcase.map((project) => (
            <motion.article key={project.name} whileHover={hoverLift} className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
              <img
                src={project.image}
                alt={project.name}
                className="h-60 w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'https://picsum.photos/seed/rb-project-fallback/1200/800';
                }}
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-white">{project.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--accent-soft)]">{project.location}</p>
                <p className="mt-3 text-sm text-[var(--text-soft)]">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Testimonials</h2>
        <p className="mt-2 text-sm text-[var(--text-soft)]">Sample placeholders for presentation only.</p>
        <div className="mt-6">
          <TestimonialCarousel items={testimonials.home} />
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#111,#1a1a1a)] p-8 text-center sm:p-12">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Ready to build a smarter, more beautiful space?</h2>
          <Link
            to="/contact"
            className="mx-auto mt-7 inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-medium text-black transition hover:bg-[#ececec]"
          >
            Get a free quote
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Contact & Enquiry</h2>
        <p className="mt-3 text-[var(--text-soft)]">Connect with either vertical from one point of contact.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={hardwareWa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black"
          >
            Enquire for Hardware
          </a>
          <a
            href={`tel:${contactDetails.phoneRaw}`}
            className="btn-outline-pill inline-flex min-h-12 items-center rounded-full border border-white px-5 py-3 text-sm"
          >
            Call {contactDetails.phoneDisplay}
          </a>
          <a
            href={`mailto:${contactDetails.email}`}
            className="btn-outline-pill inline-flex min-h-12 items-center rounded-full border border-white px-5 py-3 text-sm"
          >
            Email Us
          </a>
        </div>
      </RevealSection>
    </>
  );
}
