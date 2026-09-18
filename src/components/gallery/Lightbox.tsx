import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '../../data/gallery'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const navButton = 'absolute text-cream/70 hover:text-marigold transition-colors z-10 p-2'

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-wine-900/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button className={`${navButton} top-6 right-6`} onClick={onClose} aria-label="Close lightbox">
        <X size={24} />
      </button>

      <button className={`${navButton} left-3 md:left-6`} onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous image">
        <ChevronLeft size={36} />
      </button>

      <motion.div
        key={image.id}
        className="max-w-4xl max-h-[85vh] px-14 md:px-16"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
        <p className="font-cormorant italic text-cream/70 text-base text-center mt-4">
          {image.alt}
        </p>
      </motion.div>

      <button className={`${navButton} right-3 md:right-6`} onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next image">
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[2px] text-marigold/70">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default Lightbox
