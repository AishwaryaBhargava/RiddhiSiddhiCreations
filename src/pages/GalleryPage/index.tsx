import SEO from '../../components/ui/SEO'
import PageHeader from '../../components/ui/PageHeader'
import PhotoGrid from '../../components/gallery/PhotoGrid'
import VideoSection from '../../components/gallery/VideoSection'
import InstagramGrid from '../../components/gallery/InstagramGrid'
import CTABand from '../../components/ui/CTABand'

function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse the henna artistry of Siddhi Bhargava — bridal mehndi, festival designs, baby shower henna, and custom creations. View photos, videos, and Instagram highlights."
      />
      <PageHeader
        overline="Portfolio"
        title="Gallery"
        intro="Bridal, festival, celebration and custom work, all drawn with organic henna."
      />
      <PhotoGrid />
      <VideoSection />
      <InstagramGrid />
      <CTABand title="Love what you see? Let's plan yours." label="Book Your Appointment" />
    </>
  )
}

export default GalleryPage
