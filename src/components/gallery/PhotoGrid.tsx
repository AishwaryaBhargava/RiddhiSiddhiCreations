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
    <section className="py-24 px-6 bg-cream">
      <SectionHeading overline="Photography" title="Henna Artistry" className="mb-10" />

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`font-sans text-[10px] font-medium tracking-[2.5px] uppercase px-5 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === cat.value
                ? 'border-wine-700 bg-wine-700 text-cream'
                : 'border-sage/60 text-wine-700 hover:border-wine-700 hover:text-wine-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-cream-200 border border-henna-400/25 shadow-[0_8px_24px_rgba(107,58,30,0.10)] flex flex-col items-center justify-center gap-2"
            >
              <div className="w-8 h-px bg-marigold-600/50" />
              <span className="font-sans text-[9px] tracking-[3px] uppercase text-wine-600">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      ) : (
        <motion.div layout className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative shadow-[0_8px_24px_rgba(107,58,30,0.12)]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/40 transition-all duration-300 flex items-center justify-center">
                  <span className="font-sans text-[10px] tracking-[3px] uppercase text-cream/0 group-hover:text-cream transition-all duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

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
