import { motion } from 'framer-motion';
import { hoverLift, fadeInUp, staggerContainer, gridItemVariants, buttonTap } from '../components/animationConfig';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink, contactDetails, hardwareBrands, hardwareCategories } from '../data/siteData';

export function ProductPage() {
  const wa = buildWhatsAppLink('Hello R.B Enterprises, I need a quote for bulk hardware orders. Please share your catalog and pricing.');

  return (
    <>
      <Seo
        title="Premium Hardware Products | R.B Enterprises - Wholesale Supplier"
        description="Comprehensive wholesale hardware catalog featuring hinges, handles, locks, drawer channels, kitchen accessories, and wardrobe fittings. Trusted by 25,500+ builders and contractors."
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
            Premium Hardware Solutions
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl text-lg text-(--text-soft)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive wholesale hardware portfolio curated for professional builders, contractors, 
            and procurement teams. Every product category backed by quality assurance, competitive pricing, 
            and reliable stock availability.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 rounded-full border border-(--accent)/30 bg-(--accent)/10 px-4 py-2">
              <span className="text-sm text-(--accent-soft)">âœ“ Bulk Order Specialists</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-(--accent)/30 bg-(--accent)/10 px-4 py-2">
              <span className="text-sm text-(--accent-soft)">âœ“ 24-48 Hour Dispatch</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-(--accent)/30 bg-(--accent)/10 px-4 py-2">
              <span className="text-sm text-(--accent-soft)">âœ“ Technical Support</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8" aria-labelledby="categories-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 id="categories-heading" className="text-3xl font-semibold">Product Categories</h2>
          <p className="mt-3 text-(--text-soft)">
            Explore our comprehensive range of trade-grade hardware solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hardwareCategories.map((category, index) => (
            <motion.article 
              key={category} 
              variants={gridItemVariants}
              whileHover={hoverLift}
              className="group glass-panel rounded-2xl p-6 hover:border-(--accent)/40"
              role="article"
              aria-label={`${category} hardware category`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-(--accent)/20 transition-all duration-300 group-hover:bg-(--accent)/30">
                <span className="text-2xl font-bold text-(--accent-soft)" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-(--text-main) group-hover:text-(--accent-soft) transition-colors duration-300">
                {category}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-(--text-soft)">
                Premium quality {category.toLowerCase()} available in multiple finishes and specifications. 
                Competitive bulk pricing with guaranteed stock availability.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-(--accent-soft)">
                <span>Explore range</span>
                <span aria-hidden="true">â†’</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 id="features-heading" className="text-3xl font-semibold">Why Choose R.B Enterprises</h2>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Quality Assurance',
              description: 'Every product undergoes rigorous quality checks before dispatch. We stand behind our hardware with comprehensive warranties.',
              icon: 'âœ“'
            },
            {
              title: 'Competitive Pricing',
              description: 'Direct manufacturer partnerships enable volume-based pricing advantages passed directly to our trade partners.',
              icon: 'â‚¹'
            },
            {
              title: 'Reliable Stock',
              description: 'Extensive warehouse inventory ensures immediate availability for urgent project requirements and emergency orders.',
              icon: 'ðŸ“¦'
            },
            {
              title: 'Expert Consultation',
              description: 'Technical team available to advise on product selection, specifications, and application-specific requirements.',
              icon: 'ðŸŽ¯'
            },
            {
              title: 'Fast Delivery',
              description: '24-48 hour dispatch guarantee with tracked shipping. Pan-India delivery network for consistent service.',
              icon: 'âš¡'
            },
            {
              title: 'Flexible Terms',
              description: 'Credit facilities for established partners. Customized payment terms based on order volume and relationship.',
              icon: 'ðŸ’¼'
            }
          ].map((feature) => (
            <motion.article 
              key={feature.title}
              variants={gridItemVariants}
              className="glass-panel rounded-2xl p-7 hover:shadow-xl"
              role="article"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-(--accent)/20 text-xl">
                <span aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-(--text-soft)">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-8" aria-labelledby="brands-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 id="brands-heading" className="text-3xl font-semibold">Premium Brand Partnerships</h2>
          <p className="mt-3 text-sm text-(--text-soft)">
            Authorized distributors and strategic partners with leading hardware manufacturers
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hardwareBrands.map((brand) => (
            <motion.article 
              key={brand} 
              variants={gridItemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel rounded-2xl p-7 text-center hover:border-(--accent)/40"
              role="article"
              aria-label={`${brand} brand partnership`}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--accent)/10">
                <span className="text-2xl font-bold text-(--accent-soft)" aria-hidden="true">â˜…</span>
              </div>
              <h3 className="text-xl font-semibold text-(--accent-soft)">{brand}</h3>
              <p className="mt-2 text-sm text-(--text-soft)">Authorized Distributor</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.p 
          className="mt-6 text-center text-sm text-(--text-soft)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Brand names shown are illustrative. Contact us for current manufacturer partnerships and product availability.
        </motion.p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] p-10 text-center sm:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          role="region"
          aria-labelledby="bulk-order-heading"
        >
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,145,82,0.3),transparent_50%)]" />
          </div>
          <div className="relative">
            <h2 id="bulk-order-heading" className="font-serif text-3xl text-white sm:text-4xl">
              Ready to Place a Bulk Order?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-(--text-soft)">
              Our team is standing by to provide detailed quotes, technical specifications, 
              and delivery timelines for your project requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div whileTap={buttonTap}>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center rounded-full bg-(--accent) px-8 text-sm font-semibold text-black transition hover:bg-(--accent-soft) hover:shadow-xl"
                  aria-label="Request bulk order quote via WhatsApp"
                >
                  Request Bulk Quote (WhatsApp)
                </a>
              </motion.div>
              <motion.div whileTap={buttonTap}>
                <a
                  href={`tel:${contactDetails.phoneRaw}`}
                  className="inline-flex min-h-14 items-center rounded-full border-2 border-white px-8 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  aria-label={`Call us at ${contactDetails.phoneDisplay}`}
                >
                  Call {contactDetails.phoneDisplay}
                </a>
              </motion.div>
              <motion.div whileTap={buttonTap}>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex min-h-14 items-center rounded-full border border-white px-8 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                  aria-label="Email our sales team"
                >
                  Email Sales Team
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" aria-label="Product information">
        <motion.div
          className="rounded-2xl border border-white/10 bg-[#141414] p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-(--accent-soft)">Important Information</h3>
          <ul className="mt-4 space-y-2 text-sm text-(--text-soft)">
            <li className="flex gap-2">
              <span aria-hidden="true">â€¢</span>
              <span>Product availability subject to current stock levels and manufacturer supply</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">â€¢</span>
              <span>Minimum order quantities may apply for certain categories and finishes</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">â€¢</span>
              <span>Custom specifications and bulk orders require advance quotation</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">â€¢</span>
              <span>Delivery timelines vary by location and order volume - contact for specifics</span>
            </li>
          </ul>
        </motion.div>
      </section>
    </>
  );
}

