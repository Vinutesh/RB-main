import { useEffect, useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { buildWhatsAppLink, contactDetails } from '../data/siteData';
import { buttonTap } from '../components/animationConfig';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hardwareWa = buildWhatsAppLink('Hello R.B Enterprises, I would like hardware supply consultation.');
  const interiorsWa = buildWhatsAppLink('Hello R.B Interiors, I want to book an interior design consultation.');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '', enquiryType: '', message: '' });
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), 4000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  return (
    <>
      <Seo
        title="Contact Us | R.B Enterprises & R.B Interiors - Get Expert Consultation"
        description="Contact R.B Enterprises for wholesale hardware enquiries or R.B Interiors for premium interior design consultation. Call +91 98765 43210 or email hello@rbenterprises.in"
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
            Let's Start a Conversation
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl text-lg text-(--text-soft)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you need wholesale hardware supply or comprehensive interior design services, 
            our expert team is ready to understand your requirements and provide tailored solutions.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.article 
          className="glass-panel rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold">Send Your Enquiry</h2>
          <p className="mt-2 text-sm text-(--text-soft)">
            Fill out the form below and we'll respond within 24 hours
          </p>
          
          <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-(--text-soft)">
                Full Name <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`mt-2 min-h-12 w-full rounded-xl border px-4 bg-black/20 transition-all duration-300 ${
                  errors.name ? 'border-red-500' : 'border-white/15 focus:border-(--accent)'
                }`}
                placeholder="Enter your full name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-(--text-soft)">
                Phone Number <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-2 min-h-12 w-full rounded-xl border px-4 bg-black/20 transition-all duration-300 ${
                  errors.phone ? 'border-red-500' : 'border-white/15 focus:border-(--accent)'
                }`}
                placeholder="10-digit mobile number"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-(--text-soft)">
                Email Address <span className="text-sm text-(--text-soft)">(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 min-h-12 w-full rounded-xl border px-4 bg-black/20 transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-white/15 focus:border-(--accent)'
                }`}
                placeholder="your.email@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="enquiryType" className="block text-sm font-medium text-(--text-soft)">
                Enquiry Type <span className="text-red-400" aria-label="required">*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className={`mt-2 min-h-12 w-full rounded-xl border px-4 bg-black/20 transition-all duration-300 ${
                  errors.enquiryType ? 'border-red-500' : 'border-white/15 focus:border-(--accent)'
                }`}
                aria-required="true"
                aria-invalid={!!errors.enquiryType}
                aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
              >
                <option value="">Select enquiry type</option>
                <option value="hardware">Wholesale Hardware Supply</option>
                <option value="interiors">Interior Design & Execution</option>
                <option value="both">Both Services</option>
              </select>
              {errors.enquiryType && (
                <p id="enquiry-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.enquiryType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-(--text-soft)">
                Your Message <span className="text-red-400" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`mt-2 w-full rounded-xl border px-4 py-3 bg-black/20 transition-all duration-300 ${
                  errors.message ? 'border-red-500' : 'border-white/15 focus:border-(--accent)'
                }`}
                placeholder="Please describe your requirements in detail..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs leading-relaxed text-(--text-soft)">
                <strong>Privacy Notice:</strong> By submitting this form, you consent to being contacted 
                via phone, WhatsApp, or email regarding your enquiry. We respect your privacy and will never 
                share your personal information with third parties. See our{' '}
                <a href="/privacy" className="text-(--accent-soft) hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={buttonTap}
              className={`inline-flex min-h-14 w-full items-center justify-center rounded-full font-semibold text-black transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-(--accent)/50 cursor-not-allowed' 
                  : 'bg-(--accent) hover:bg-(--accent-soft) hover:shadow-xl'
              }`}
              aria-label={isSubmitting ? "Submitting enquiry" : "Submit enquiry form"}
            >
              {isSubmitting ? (
                <>
                  <svg className="mr-2 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </motion.button>
          </form>
        </motion.article>

        <div className="space-y-6">
          <motion.article 
            className="glass-panel rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Direct Contact Options</h2>
            <p className="mt-2 text-sm text-(--text-soft)">
              Prefer immediate contact? Connect with us directly
            </p>
            
            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href={hardwareWa}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="group flex min-h-14 items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-5 transition-all duration-300 hover:border-(--accent)/40 hover:bg-white/10"
                aria-label="Contact for hardware enquiry via WhatsApp"
              >
                <span className="text-2xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M11.98 2.004a9.94 9.94 0 0 0-8.63 14.88L2 22l5.26-1.33a9.96 9.96 0 1 0 4.72-18.67Zm0 18.12a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.12.79.83-3.04-.2-.31a8.18 8.18 0 1 1 6.95 3.88Zm4.5-6.13c-.25-.13-1.48-.73-1.7-.82-.23-.08-.39-.12-.55.13-.17.25-.64.82-.79.99-.15.16-.3.19-.56.06-.25-.13-1.07-.4-2.03-1.27-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.12-.14.16-.25.24-.42.08-.16.04-.31-.02-.44-.07-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.12.16 1.75 2.67 4.23 3.75.59.25 1.06.4 1.42.51.59.18 1.13.16 1.56.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">Hardware Enquiry</p>
                  <p className="text-xs text-(--text-soft)">WhatsApp - Instant Response</p>
                </div>
              </motion.a>

              <motion.a
                href={interiorsWa}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="group flex min-h-14 items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-5 transition-all duration-300 hover:border-(--accent)/40 hover:bg-white/10"
                aria-label="Book interior consultation via WhatsApp"
              >
                <span className="text-2xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M11.98 2.004a9.94 9.94 0 0 0-8.63 14.88L2 22l5.26-1.33a9.96 9.96 0 1 0 4.72-18.67Zm0 18.12a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.12.79.83-3.04-.2-.31a8.18 8.18 0 1 1 6.95 3.88Zm4.5-6.13c-.25-.13-1.48-.73-1.7-.82-.23-.08-.39-.12-.55.13-.17.25-.64.82-.79.99-.15.16-.3.19-.56.06-.25-.13-1.07-.4-2.03-1.27-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.12-.14.16-.25.24-.42.08-.16.04-.31-.02-.44-.07-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.12.16 1.75 2.67 4.23 3.75.59.25 1.06.4 1.42.51.59.18 1.13.16 1.56.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">Interior Consultation</p>
                  <p className="text-xs text-(--text-soft)">WhatsApp - Schedule Meeting</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactDetails.phoneRaw}`}
                whileHover={{ x: 4 }}
                className="group flex min-h-14 items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-5 transition-all duration-300 hover:border-(--accent)/40 hover:bg-white/10"
                aria-label={`Call us at ${contactDetails.phoneDisplay}`}
              >
                <span className="text-2xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.7 11.7 0 0 0 3.67.59 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h4.86a1 1 0 0 1 1 1c0 1.27.2 2.5.59 3.67a1 1 0 0 1-.24 1.02l-2.59 2.1Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">{contactDetails.phoneDisplay}</p>
                  <p className="text-xs text-(--text-soft)">Mon-Sat, 9:00 AM - 7:00 PM</p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${contactDetails.email}`}
                whileHover={{ x: 4 }}
                className="group flex min-h-14 items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-5 transition-all duration-300 hover:border-(--accent)/40 hover:bg-white/10"
                aria-label="Email our team"
              >
                <span className="text-2xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.5-.25a.5.5 0 0 0-.33.87l6.95 6.06a1.5 1.5 0 0 0 1.76 0l6.95-6.06a.5.5 0 0 0-.33-.87H4.5Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-white">{contactDetails.email}</p>
                  <p className="text-xs text-(--text-soft)">Response within 24 hours</p>
                </div>
              </motion.a>
            </div>
          </motion.article>

          <motion.article
            className="glass-panel rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold">Visit Our Office</h3>
            <p className="mt-3 text-sm leading-relaxed text-(--text-soft)">
              {contactDetails.address}
            </p>
            <div className="mt-4 space-y-2 text-sm text-(--text-soft)">
              <p><strong className="text-white">Business Hours:</strong></p>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </motion.article>

          <motion.div
            className="overflow-hidden rounded-3xl border border-white/15"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <iframe
              title="R.B Enterprises Office Location"
              src="https://www.google.com/maps?q=Bengaluru&output=embed"
              loading="lazy"
              className="h-64 w-full lg:h-80"
              aria-label="Map showing R.B Enterprises office location in Bangalore"
            />
          </motion.div>
        </div>
      </section>

      {submitted && (
        <motion.div
          className="fixed right-4 top-24 z-60 max-w-md rounded-xl border border-emerald-600/40 bg-emerald-900/90 px-6 py-4 shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl" aria-hidden="true">âœ“</span>
            <div>
              <p className="font-semibold text-emerald-200">Enquiry Submitted Successfully!</p>
              <p className="mt-1 text-sm text-emerald-300">
                Thank you for contacting us. Our team will respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

