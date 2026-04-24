import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import InquiryForm from '../../components/contact/InquiryForm'
import SectionHeading from '../../components/ui/SectionHeading'

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact & Booking"
        description="Book Arpana Bhargava for your next event. Fill out a quick inquiry form and she will be in touch personally. Bridal mehndi, festivals, baby showers, and custom requests."
      />

      {/* Page header */}
      <section className="py-20 px-6 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,rgba(201,162,77,0.07)_0%,transparent_65%)]">
        <SectionHeading title="Get in Touch" />
        <p className="font-sans text-ivory/60 text-sm text-center max-w-md mx-auto -mt-6 leading-relaxed">
          Ready to book or just have questions? Fill in the form below and Arpana will be in touch personally.
        </p>
      </section>

      {/* Form section */}
      <section className="border-t border-gold/10 py-16 px-6 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(201,162,77,0.05)_0%,transparent_65%)]">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Form card */}
          <div className="border border-gold/15 bg-white/[0.02] p-8 md:p-12">
            <div className="w-8 h-0.5 bg-gold opacity-50 mb-8" />
            <InquiryForm />
          </div>

          {/* Direct contact note */}
          <p className="font-sans text-[11px] text-ivory/30 text-center mt-6 leading-relaxed">
            Prefer to reach out directly?&nbsp;
            <a
              href="tel:4849952444"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              484-995-2444
            </a>
            &nbsp;or&nbsp;
            <a
              href="mailto:bhargavasiddhi@gmail.com"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              bhargavasiddhi@gmail.com
            </a>
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default ContactPage