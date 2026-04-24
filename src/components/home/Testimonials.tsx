import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

function Testimonials() {
  const filtered = testimonials.filter((t) => t.rating >= 4).slice(0, 3)

  return (
    <section className="py-24 px-6 border-t border-gold/8 bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(201,162,77,0.06)_0%,transparent_65%)]">
      <SectionHeading overline="Client Love" title="Words from Happy Clients" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {filtered.map((t, i) => (
          <motion.div
            key={t.id}
            className="relative p-8 border border-gold/15 bg-white/[0.025]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Gold top bar */}
            <div className="absolute top-0 left-8 w-8 h-0.5 bg-gold opacity-55" />

            {/* Stars */}
            <div className="flex gap-1 mb-4 mt-1">
              {Array.from({ length: t.rating }).map((_, s) => (
                <span key={s} className="text-gold text-xs">★</span>
              ))}
            </div>

            {/* Review */}
            <blockquote className="font-serif italic text-ivory/80 text-base leading-relaxed mb-6">
              "{t.review}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-gold/40" />
              <span className="font-sans text-[9.5px] tracking-[2.5px] uppercase text-gold/75">
                {t.name} · {t.occasion}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button to="/reviews" variant="outline">Read All Reviews</Button>
      </div>
    </section>
  )
}

export default Testimonials