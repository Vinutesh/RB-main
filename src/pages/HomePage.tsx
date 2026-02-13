import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  hoverLift, 
  fadeInUp, 
  staggerContainer, 
  gridItemVariants,
  buttonTap 
} from '../components/animationConfig';
import { RevealSection } from '../components/RevealSection';
import { Seo } from '../components/Seo';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import {
  buildWhatsAppLink,
  contactDetails,
  heroImages,
  portfolioPreview,
  testimonials,
  trustBrands,
} from '../data/siteData';

export function HomePage() {
  const hardwareWa = buildWhatsAppLink('Hello R.B Enterprises, I want to enquire about wholesale hardware supply.');
  const homeServices = [
    {
      title: 'Interior Designing',
      description: 'End-to-end design development and site execution through the R.B Interiors vertical.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=80',
      cta: '/interior-designing',
    },
    {
      title: 'Hardware Solutions',
      description: 'Wholesale interior hardware sourcing for builders, contractors, and project procurement teams.',
      image: 'https://images.unsplash.com/photo-1581147036324-c47a03a81d48?auto=format&fit=crop&w=1100&q=80',
      cta: '/contact',
    },
  ];

  return (
    <>
      <Seo
        title="R.B Enterprises | Premium Wholesale Interior Hardware & Luxury Interior Design Services"
        description="R.B Enterprises - Your trusted partner for wholesale interior hardware supply. R.B Interiors delivers exceptional interior design and execution services with uncompromising quality."
      />

      <RevealSection className="relative min-h-svh">
        <motion.img 
          src={heroImages.architecture} 
          alt="Modern luxury architecture" 
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[1px]" />
        <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pb-40 pt-20 text-center sm:px-6 lg:px-8">
          <motion.h1 
            className="font-serif text-4xl leading-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Elevating Spaces Through
            <br />
            <span className="text-(--accent-soft)">Precision & Artistry</span>
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-3xl text-base text-[#e0e0e0] sm:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            R.B Enterprises delivers comprehensive wholesale hardware solutions for discerning builders and contractors. 
            R.B Interiors transforms visions into reality with premium design execution and meticulous attention to detail.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div whileTap={buttonTap}>
              <Link
                to="/contact"
                className="btn-outline-pill inline-flex min-h-14 items-center rounded-full border-2 border-white px-8 text-sm font-semibold text-white transition hover:shadow-2xl"
              >
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div whileTap={buttonTap}>
              <Link
                to="/interior-designing"
                className="btn-outline-pill inline-flex min-h-14 items-center rounded-full border-2 border-white px-8 text-sm font-semibold text-white transition hover:shadow-2xl"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/*<motion.div 
          className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <article className="pointer-events-auto mx-auto grid max-w-4xl gap-6 rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-2xl md:grid-cols-[1.2fr_0.8fr] md:p-7 hover:bg-white/15 transition-all duration-500">
            <div className="self-center">
              <p className="text-xs uppercase tracking-[0.25em] text-(--accent-soft)">Data-Driven Excellence</p>
              <p className="mt-4 font-serif text-2xl text-white sm:text-3xl">Strategic Planning Meets Transparent Pricing</p>
              <p className="mt-3 text-sm text-[#c0c0c0]">Every project backed by detailed cost analysis and timeline certainty</p>
            </div>
            <motion.img 
              src={heroImages.featureCard} 
              alt="Premium modern architecture detail" 
              className="h-48 w-full rounded-2xl object-cover md:h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </article>
        </motion.div>*/}
      </RevealSection>

      <RevealSection className="border-y border-white/10 bg-black/40 py-8 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-(--accent-soft)">â˜…â˜…â˜…â˜…â˜…</p>
            <p className="mt-2 text-xl font-semibold text-white">Exceptional Service Standards</p>
            <p className="mt-1 text-sm text-(--text-soft)">Over 25,500 satisfied clients nationwide</p>
          </motion.div>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="marquee-track inline-flex gap-12 text-sm font-medium text-(--text-soft)">
              <div className="marquee-group inline-flex gap-12 pr-12">
                {trustBrands.map((brand) => (
                  <span key={`a-${brand}`} className="hover:text-(--accent-soft) transition-colors">{brand}</span>
                ))}
              </div>
              <div className="marquee-group inline-flex gap-12 pr-12" aria-hidden="true">
                {trustBrands.map((brand) => (
                  <span key={`b-${brand}`} className="hover:text-(--accent-soft) transition-colors">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="section-label">PORTFOLIO EXCELLENCE</p>
          <h2 className="section-title">Distinguished Work Showcase</h2>
          <p className="mt-4 max-w-2xl text-(--text-soft)">
            A curated selection of our most prestigious projects, demonstrating our commitment to exceptional craftsmanship
          </p>
        </motion.div>
        <motion.div 
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioPreview.map((image, index) => (
            <motion.div
              key={image}
              variants={gridItemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 hover:border-(--accent)/50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Portfolio showcase ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.src = `https://picsum.photos/seed/rb-portfolio-fallback-${index + 1}/700/700`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="section-label">OUR FOUNDATION</p>
          <h2 className="section-title">Where Purpose Meets Passion</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-(--text-soft)">
            With over 15 years of industry leadership, our dual-vertical structure ensures specialized excellence. 
            R.B Enterprises provides comprehensive wholesale hardware solutions for B2B partnerships, while R.B Interiors 
            crafts bespoke design experiences with uncompromising attention to detail and execution quality.
          </p>
        </motion.div>
        <motion.div 
          className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { stat: '15+', label: 'Years of Excellence' },
            { stat: '80+', label: 'Expert Team Members' },
            { stat: '500+', label: 'Completed Projects' },
            { stat: '30+', label: 'Industry Accolades' }
          ].map((item) => (
            <motion.article 
              key={item.label} 
              variants={gridItemVariants}
              className="glass-panel rounded-2xl p-6 text-center"
            >
              <p className="font-serif text-4xl font-bold text-(--accent-soft)">{item.stat}</p>
              <p className="mt-2 text-sm text-white">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="section-label">COMPREHENSIVE SOLUTIONS</p>
          <h2 className="section-title">Services Crafted for Excellence</h2>
          <p className="mt-4 max-w-3xl text-(--text-soft)">
            From concept to completion, we deliver integrated solutions that transform spaces into timeless experiences
          </p>
        </motion.div>
        <motion.div 
          className="mt-10 grid gap-7 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {homeServices.map((service) => (
            <motion.article 
              key={service.title} 
              variants={gridItemVariants}
              whileHover={hoverLift}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#161616] hover:border-(--accent)/30 transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-white group-hover:text-(--accent-soft) transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-(--text-soft)">{service.description}</p>
                <motion.div whileTap={buttonTap}>
                  <Link
                    to={service.cta}
                    className="btn-outline-pill mt-6 inline-flex min-h-12 items-center rounded-full border border-white px-6 text-sm font-medium text-white"
                  >
                    Explore This Service â†’
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </RevealSection>

      <RevealSection className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="mt-3 text-sm text-(--text-soft)">Hear from our valued partners and clients</p>
        </motion.div>
        <div className="mt-8">
          <TestimonialCarousel items={testimonials.home} />
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold">Connect With Us</h2>
          <p className="mt-3 text-(--text-soft)">Experience personalized service through your preferred channel</p>
        </motion.div>
        <div className="mt-7 flex flex-wrap gap-4">
          <motion.div whileTap={buttonTap}>
            <a
              href={hardwareWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-black transition hover:bg-(--accent-soft) hover:shadow-xl"
            >
              Wholesale Hardware Enquiry
            </a>
          </motion.div>
          <motion.div whileTap={buttonTap}>
            <a
              href={`tel:${contactDetails.phoneRaw}`}
              className="btn-outline-pill inline-flex min-h-12 items-center rounded-full border border-white px-6 py-3 text-sm font-medium"
            >
              Call {contactDetails.phoneDisplay}
            </a>
          </motion.div>
          <motion.div whileTap={buttonTap}>
            <a
              href={`mailto:${contactDetails.email}`}
              className="btn-outline-pill inline-flex min-h-12 items-center rounded-full border border-white px-6 py-3 text-sm font-medium"
            >
              Email Our Team
            </a>
          </motion.div>
        </div>
      </RevealSection>
    </>
  );
}

