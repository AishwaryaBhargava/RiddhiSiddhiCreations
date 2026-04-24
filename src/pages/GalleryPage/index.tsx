import SEO from '../../components/ui/SEO'
import PhotoGrid from '../../components/gallery/PhotoGrid'
import VideoSection from '../../components/gallery/VideoSection'
import InstagramGrid from '../../components/gallery/InstagramGrid'

function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse the henna artistry of Arpana Bhargava — bridal mehndi, festival designs, baby shower henna, and custom creations. View photos, videos, and Instagram highlights."
      />
      <PhotoGrid />
      <VideoSection />
      <InstagramGrid />
    </>
  )
}

export default GalleryPage