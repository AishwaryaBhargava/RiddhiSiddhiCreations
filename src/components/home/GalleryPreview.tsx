import { motion } from 'framer-motion'
import { galleryImages } from '../../data/gallery'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const placeholders = [
  { id: 'p1', label: 'Featured', featured: true },
  { id: 'p2', label: 'Bridal' },
  { id: 'p3', label: 'Detail' },
  { id: 'p4', label: 'Festival' },
  { id: 'p5', label: 'Celebration' },
]

const cellClass = (featured?: boolean) =>
  `${featured ? 'col-span-2 md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square md:aspect-auto'} rounded-xl overflow-hidden`

function GalleryPreview() {
  /* Real photos once gallery.ts is filled; placeholders until then */
  const photos = galleryImages.slice(0, 5)

  return (
    <section className="py-24 px-6 bg-cream">
      <SectionHeading overline="Portfolio" title="Our Henna Artistry" />

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 md:h-[480px]">
          {photos.length >= 5
            ? photos.map((img, i) => (
                <motion.div
                  key={img.id}
                  className={`${cellClass(i === 0)} group relative`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </motion.div>
              ))
            : placeholders.map((cell, i) => (
                <motion.div
                  key={cell.id}
                  className={`${cellClass(cell.featured)} bg-cream-200 border border-henna-400/25 shadow-[0_8px_24px_rgba(107,58,30,0.10)] flex flex-col items-center justify-center gap-2`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="w-8 h-px bg-marigold-600/50" />
                  <span className="font-sans text-[9px] tracking-[3px] uppercase text-wine-600">
                    {cell.label}
                  </span>
                </motion.div>
              ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button to="/gallery" variant="outlineDark">View Full Gallery</Button>
      </div>
    </section>
  )
}

export default GalleryPreview
