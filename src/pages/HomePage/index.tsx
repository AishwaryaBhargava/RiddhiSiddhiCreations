import Hero from '../../components/home/Hero'
import ValuePillars from '../../components/home/ValuePillars'
import OccasionsStrip from '../../components/home/OccasionsStrip'
import GalleryPreview from '../../components/home/GalleryPreview'
import Testimonials from '../../components/home/Testimonials'
import BookingSteps from '../../components/home/BookingSteps'
import HomeCTA from '../../components/home/HomeCTA'

function HomePage() {
  return (
    <div>
      <Hero />
      <ValuePillars />
      <OccasionsStrip />
      <GalleryPreview />
      <Testimonials />
      <BookingSteps />
      <HomeCTA />
    </div>
  )
}

export default HomePage