import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { fadeInUp, staggerContainer, gridItemVariants, scaleIn } from '../components/animationConfig';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | R.B Enterprises & R.B Interiors - 15+ Years of Excellence"
        description="Discover the story behind R.B Enterprises' wholesale hardware excellence and R.B Interiors' premium design services. Over 15 years of industry leadership and 500+ successful projects."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="font-serif text-4xl text-[var(--accent-soft)] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting Excellence Since 2010
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl text-lg text-[var(--text-soft)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            R.B Enterprises and R.B Interiors operate as integrated verticals under unified leadership, 
            ensuring seamless coordination between wholesale hardware supply and premium interior execution. 
            Our specialized approach delivers exceptional results for discerning clients and project teams.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <motion.article 
          className="glass-panel rounded-2xl p-8 hover:shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, scale: 1.02 }}
          role="article"
          aria-labelledby="rb-enterprises-heading"
        >
          <h2 id="rb-enterprises-heading" className="text-2xl font-semibold">R.B Enterprises</h2>
          <p className="mt-4 text-[var(--text-soft)] leading-relaxed">
            Premier wholesale interior hardware supplier catering exclusively to B2B requirements. 
            We partner with contractors, builders, architects, and procurement professionals to deliver 
            comprehensive hardware solutions with reliable stock availability, competitive pricing, and 
            expert technical support.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">Bulk order specialists</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">24-48 hour dispatch guarantee</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">Technical consultation included</p>
            </div>
          </div>
        </motion.article>

        <motion.article 
          className="glass-panel rounded-2xl p-8 hover:shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, scale: 1.02 }}
          role="article"
          aria-labelledby="rb-interiors-heading"
        >
          <h2 id="rb-interiors-heading" className="text-2xl font-semibold">R.B Interiors</h2>
          <p className="mt-4 text-[var(--text-soft)] leading-relaxed">
            Full-service interior design and execution partner delivering bespoke residential and commercial 
            environments. From conceptual design through final handover, we maintain rigorous quality standards, 
            transparent communication, and disciplined project management at every milestone.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">End-to-end design execution</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">Milestone-based quality checks</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm text-[var(--text-main)]">Premium material partnerships</p>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold">Our Journey</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[var(--text-soft)]">
            Founded in 2010 with a focus on trade-grade hardware supply, R.B Enterprises evolved organically 
            to meet growing demand for integrated interior solutions. This expansion led to the establishment 
            of R.B Interiors in 2015, creating a comprehensive service ecosystem that addresses both product 
            supply and design execution needs.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[var(--text-soft)]">
            Today, we serve over 25,500 clients across residential, commercial, and institutional sectors, 
            maintaining our founding commitment to quality, transparency, and customer-centric service delivery.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 id="values-heading" className="text-3xl font-semibold">Core Values</h2>
          <p className="mt-3 text-[var(--text-soft)]">The principles that guide every decision and interaction</p>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Uncompromising Quality',
              description: 'Every product vetted, every detail verified, every standard exceeded'
            },
            {
              title: 'Transparent Communication',
              description: 'Clear timelines, honest assessments, proactive updates'
            },
            {
              title: 'Execution Excellence',
              description: 'Milestone discipline, quality checkpoints, accountable delivery'
            },
            {
              title: 'Lasting Partnerships',
              description: 'Built on trust, sustained through consistency, valued for reliability'
            }
          ].map((item, index) => (
            <motion.article 
              key={item.title} 
              variants={gridItemVariants}
              className="glass-panel rounded-2xl p-6 hover:border-[var(--accent)]/40"
              role="article"
              aria-label={item.title}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/20">
                <span className="text-xl font-bold text-[var(--accent-soft)]" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-[var(--text-main)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8" aria-labelledby="milestones-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 id="milestones-heading" className="text-3xl font-semibold">Key Milestones</h2>
        </motion.div>
        
        <motion.div 
          className="mt-8 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { year: '2010', event: 'R.B Enterprises established as wholesale hardware supplier' },
            { year: '2015', event: 'R.B Interiors division launched for design & execution' },
            { year: '2018', event: 'Expanded to 80+ team members, 5000+ sq ft warehouse' },
            { year: '2020', event: 'Digital transformation: online catalog & streamlined ordering' },
            { year: '2023', event: '500+ projects completed, 25,500+ clients served nationwide' },
          ].map((milestone) => (
            <motion.div 
              key={milestone.year} 
              variants={gridItemVariants}
              className="flex gap-6 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-[var(--accent)]/30 transition-all duration-300"
              role="article"
              aria-label={`Milestone ${milestone.year}`}
            >
              <div className="shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/20">
                  <span className="font-serif text-xl font-bold text-[var(--accent-soft)]">{milestone.year}</span>
                </div>
              </div>
              <div className="self-center">
                <p className="text-[var(--text-main)]">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] p-10 text-center sm:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          role="region"
          aria-label="Call to action"
        >
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,145,82,0.3),transparent_50%)]" />
          </div>
          <div className="relative">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Partner with Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--text-soft)]">
              Whether you need reliable hardware supply or comprehensive interior execution, 
              we're ready to support your vision with expertise and dedication.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-[var(--accent-soft)] hover:shadow-xl"
                aria-label="Contact us to start your project"
              >
                Start Your Project
              </a>
              <a
                href="/product"
                className="inline-flex min-h-12 items-center rounded-full border border-white px-8 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                aria-label="View our product catalog"
              >
                View Catalog
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
