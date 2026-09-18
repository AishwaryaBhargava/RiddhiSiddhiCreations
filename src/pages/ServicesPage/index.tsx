import SEO from '../../components/ui/SEO'
import PageHeader from '../../components/ui/PageHeader'
import { services } from '../../data/services'
import ServiceCard from '../../components/services/ServiceCard'
import PricingInfo from '../../components/services/PricingInfo'
import CTABand from '../../components/ui/CTABand'

function ServicesPage() {
  return (
    <>
      <SEO
        title="Services & Pricing"
        description="Henna services by Siddhi Bhargava including bridal mehndi, guest henna, festival designs, baby shower, and custom requests. Organic henna. Available nationwide."
      />
      <PageHeader
        overline="What We Offer"
        title="Services"
        intro="From full bridal mehndi to quick guest designs, every session uses organic henna and a design made for you."
      />

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <PricingInfo />

      {/* The pricing band is already wine, so the closing band merges into it */}
      <CTABand title="Ready to discuss your event?" label="Request a Booking" topScallop={false} />
    </>
  )
}

export default ServicesPage
