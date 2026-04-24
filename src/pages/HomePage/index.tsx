import Hero from '../../components/home/Hero'
import ValuePillars from '../../components/home/ValuePillars'
import OccasionsStrip from '../../components/home/OccasionsStrip'
import GalleryPreview from '../../components/home/GalleryPreview'
import Testimonials from '../../components/home/Testimonials'

function HomePage() {
  return (
    <div>
      <Hero />
      <ValuePillars />
      <OccasionsStrip />
      <GalleryPreview />
      <Testimonials />
    </div>
  )
}

export default HomePage