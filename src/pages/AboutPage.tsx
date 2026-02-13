import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { fadeInUp, staggerContainer, gridItemVariants, scaleIn } from '../components/animationConfig';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | R.B Group - Enterprises & Interiors"
        description="Learn how R.B Group unifies R.B Enterprises and R.B Interiors to deliver dependable hardware supply and quality-focused interior execution."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="font-serif text-4xl text-(--accent-soft) sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            R.B Group: Built on Trust, Driven by Execution
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl text-lg text-(--text-soft)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            R.B Group brings together two specialized branches under one leadership team. 
            R.B Enterprises supports project procurement with dependable hardware supply, while 
            R.B Interiors delivers design-led execution for residential and commercial spaces. 
            Together, we provide a practical, accountable, and end-to-end partnership model.
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
          <p className="mt-4 text-(--text-soft) leading-relaxed">
            The hardware and procurement branch of R.B Group. We serve contractors, builders, architects, 
            and institutional buyers with reliable stock availability, practical product guidance, 
            and streamlined bulk-order support.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Bulk hardware procurement support</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Consistent stock planning and dispatch</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Category expertise for project teams</p>
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
          <p className="mt-4 text-(--text-soft) leading-relaxed">
            The design and execution branch of R.B Group. From concept development to final handover, 
            we deliver interior spaces with clarity, material discipline, and milestone-based execution 
            across residential and commercial projects.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Concept-to-handover delivery model</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Structured milestone quality reviews</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden="true" />
              <p className="text-sm text-(--text-main)">Design-first material and finish planning</p>
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
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-(--text-soft)">
            R.B Group began with R.B Enterprises in 2010, focused on delivering trade-grade hardware 
            with dependable service for growing project demand. As client requirements expanded beyond supply, 
            the group launched R.B Interiors in 2015 to provide integrated design and execution capabilities.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-(--text-soft)">
            Today, R.B Group operates with a dual-branch model that combines procurement strength and 
            execution accountability. Our commitment remains the same: quality-first delivery, transparent 
            communication, and long-term client relationships.
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
          <p className="mt-3 text-(--text-soft)">The operating principles behind every R.B Group engagement</p>
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
              description: 'Clear standards in supply, design, and execution'
            },
            {
              title: 'Transparent Communication',
              description: 'Straightforward timelines, decisions, and status updates'
            },
            {
              title: 'Execution Excellence',
              description: 'Disciplined delivery through measurable milestones'
            },
            {
              title: 'Client Partnership',
              description: 'Long-term collaboration built on reliability and trust'
            }
          ].map((item, index) => (
            <motion.article 
              key={item.title} 
              variants={gridItemVariants}
              className="glass-panel rounded-2xl p-6 hover:border-(--accent)/40"
              role="article"
              aria-label={item.title}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-(--accent)/20">
                <span className="text-xl font-bold text-(--accent-soft)" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-(--text-main)">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--text-soft)">{item.description}</p>
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
          <h2 id="milestones-heading" className="text-3xl font-semibold">R.B Group Milestones</h2>
        </motion.div>
        
        <motion.div 
          className="mt-8 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { year: '2010', event: 'R.B Enterprises established as the group hardware supply foundation' },
            { year: '2015', event: 'R.B Interiors launched to provide dedicated design and execution services' },
            { year: '2018', event: 'Operational expansion with larger team capacity and warehousing support' },
            { year: '2020', event: 'Process modernization for faster coordination and client response' },
            { year: '2023', event: 'Strengthened dual-branch model serving residential and commercial sectors' },
          ].map((milestone) => (
            <motion.div 
              key={milestone.year} 
              variants={gridItemVariants}
              className="flex gap-6 rounded-xl border border-white/10 bg-[#141414] p-5 hover:border-(--accent)/30 transition-all duration-300"
              role="article"
              aria-label={`Milestone ${milestone.year}`}
            >
              <div className="shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-(--accent)/20">
                  <span className="font-serif text-xl font-bold text-(--accent-soft)">{milestone.year}</span>
                </div>
              </div>
              <div className="self-center">
                <p className="text-(--text-main)">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] p-10 text-center sm:p-12"
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
              Partner with R.B Group
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-(--text-soft)">
              Whether you need hardware procurement through R.B Enterprises or design and execution 
              through R.B Interiors, our team is ready to support your next project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full px-8 bg-(--accent) font-semibold text-black transition hover:bg-(--accent-soft) hover:shadow-xl"
                aria-label="Contact us to start your project"
              >
                Talk to Our Team
              </a>
              <a
                href="/product"
                className="inline-flex min-h-12 items-center rounded-full border border-white px-8 text-sm font-medium text-white! transition hover:bg-white hover:text-black!"
                aria-label="View our product catalog"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}


