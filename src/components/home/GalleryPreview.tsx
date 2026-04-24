import { motion } from 'framer-motion'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const placeholders = [
  { id: 1, label: 'Featured', tall: true },
  { id: 2, label: 'Bridal' },
  { id: 3, label: 'Detail' },
  { id: 4, label: 'Festival' },
  { id: 5, label: 'Celebration' },
]

function GalleryPreview() {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(201,162,77,0.05)_0%,transparent_65%)]">
      <SectionHeading overline="Portfolio" title="Our Henna Artistry" />

      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-3 grid-rows-2 gap-1" style={{ height: '480px' }}>

          {/* Featured tall cell */}
          <motion.div
            className="row-span-2 bg-[rgba(201,162,77,0.05)] border border-gold/10 flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-5 h-px bg-gold/25" />
            <span className="font-sans text-[9px] tracking-[3px] uppercase text-gold/30">
              Featured
            </span>
          </motion.div>

          {/* Remaining 4 cells */}
          {placeholders.slice(1).map((cell, i) => (
            <motion.div
              key={cell.id}
              className="bg-[rgba(201,162,77,0.05)] border border-gold/10 flex flex-col items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
            >
              <div className="w-4 h-px bg-gold/20" />
              <span className="font-sans text-[9px] tracking-[3px] uppercase text-gold/25">
                {cell.label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>

      <div className="flex justify-center">
        <Button to="/gallery" variant="outline">View Full Gallery</Button>
      </div>
    </section>
  )
}

export default GalleryPreview