import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import PageHeader from '../../components/ui/PageHeader'
import InquiryForm from '../../components/contact/InquiryForm'
import { contact } from '../../data/contact'

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact & Booking"
        description="Book Siddhi Bhargava for your next event. Fill out a quick inquiry form and she will be in touch personally. Bridal mehndi, festivals, baby showers, and custom requests."
      />
      <PageHeader
        overline="Contact & Booking"
        title="Get in Touch"
        intro="Ready to book or just have questions? Fill in the form below and Siddhi will be in touch personally."
      />

      <section className="py-16 md:py-20 px-6 bg-cream">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl bg-white/60 border border-marigold-600/40 shadow-[0_14px_36px_rgba(107,58,30,0.10)] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-rose-600 rounded-full" />
              <span className="font-sans text-[10px] font-medium tracking-[3px] uppercase text-wine-700/70">
                Booking Inquiry
              </span>
            </div>
            <InquiryForm />
          </div>

          <p className="font-sans text-[12px] text-wine-700/70 text-center mt-6 leading-relaxed">
            Prefer to reach out directly?&nbsp;
            <a href={contact.phoneHref} className="text-rose-600 hover:text-wine-800 transition-colors">{contact.phoneDisplay}</a>
            &nbsp;or&nbsp;
            <a href={`mailto:${contact.email}`} className="text-rose-600 hover:text-wine-800 transition-colors">{contact.email}</a>
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default ContactPage
