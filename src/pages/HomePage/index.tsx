import SEO from '../../components/ui/SEO'
import Hero from '../../components/home/Hero'
import ValuePillars from '../../components/home/ValuePillars'
import OccasionsStrip from '../../components/home/OccasionsStrip'
import GalleryPreview from '../../components/home/GalleryPreview'
import Testimonials from '../../components/home/Testimonials'
import BookingSteps from '../../components/home/BookingSteps'
import HomeCTA from '../../components/home/HomeCTA'

function HomePage() {
  return (
    <>
      <SEO
        title="Exquisite Henna Art for Your Special Moments"
        description="RiddhiSiddhi Creations by Siddhi Bhargava — professional henna artist specializing in bridal mehndi, custom designs, and organic henna for all occasions. Available nationwide."
      />
      <Hero />
      <ValuePillars />
      <OccasionsStrip />
      <GalleryPreview />
      <Testimonials />
      <BookingSteps />
      <HomeCTA />
    </>
  )
}

export default HomePage