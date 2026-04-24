import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import { services } from '../../data/services'
import ServiceCard from '../../components/services/ServiceCard'
import PricingInfo from '../../components/services/PricingInfo'
import SectionHeading from '../../components/ui/SectionHeading'
import Button from '../../components/ui/Button'

function ServicesPage() {
  return (
    <>
      <SEO
        title="Services & Pricing"
        description="Henna services by Arpana Bhargava including bridal mehndi, guest henna, festival designs, baby shower, and custom requests. Organic henna. Available nationwide."
      />

      {/* Page header */}
      <section className="py-20 px-6 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,rgba(201,162,77,0.07)_0%,transparent_65%)]">
        <SectionHeading title="Services" />
      </section>

      {/* Service cards */}
      <section className="border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Pricing info */}
      <PricingInfo />

      {/* CTA */}
      <section className="py-20 px-6 bg-[radial-gradient(ellipse_50%_70%_at_50%_50%,rgba(201,162,77,0.07)_0%,transparent_65%)] border-t border-gold/10">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif italic text-ivory text-4xl font-500 max-w-lg leading-tight">
            Ready to discuss your event?
          </h2>
          <Button to="/contact" variant="outline">
            Request a Booking
          </Button>
        </motion.div>
      </section>
    </>
  )
}

export default ServicesPage