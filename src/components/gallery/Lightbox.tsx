import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '../../data/gallery'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-ivory/60 hover:text-gold transition-colors z-10"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {/* Prev button */}
        <button
          className="absolute left-6 text-ivory/60 hover:text-gold transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Image */}
        <motion.div
          key={image.id}
          className="max-w-4xl max-h-[85vh] px-16"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[85vh] object-contain"
          />
          <p className="font-sans text-[10px] tracking-[2.5px] uppercase text-ivory/40 text-center mt-4">
            {image.alt}
          </p>
        </motion.div>

        {/* Next button */}
        <button
          className="absolute right-6 text-ivory/60 hover:text-gold transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[2px] text-ivory/30">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox