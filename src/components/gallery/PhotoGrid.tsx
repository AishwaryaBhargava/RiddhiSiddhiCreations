import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages, categories } from '../../data/gallery'
import type { GalleryImage } from '../../data/gallery'
import Lightbox from './Lightbox'
import SectionHeading from '../ui/SectionHeading'

function PhotoGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered: GalleryImage[] =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goNext = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0))
  const goPrev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0))

  return (
    <section className="py-24 px-6">
      <SectionHeading title="Henna Artistry" />

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`font-sans text-[10px] tracking-[2.5px] uppercase px-5 py-2 border transition-all duration-200 ${
              activeCategory === cat.value
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-gold/25 text-ivory/60 hover:border-gold/50 hover:text-ivory/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gold/5 border border-gold/10 flex flex-col items-center justify-center gap-2"
            >
              <div className="w-5 h-px bg-gold/20" />
              <span className="font-sans text-[9px] tracking-[2px] uppercase text-gold/25">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1"
        >
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-square overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="font-sans text-[9px] tracking-[2px] uppercase text-ivory/0 group-hover:text-ivory/80 transition-all duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && filtered.length > 0 && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}

export default PhotoGrid