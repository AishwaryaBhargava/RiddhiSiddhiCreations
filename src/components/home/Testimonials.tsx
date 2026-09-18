import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

function Testimonials() {
  const filtered = testimonials.filter((t) => t.rating >= 4).slice(0, 3)

  return (
    <section className="relative bg-wine-800 overflow-hidden">
      {/* Scallop: cream petals dipping into wine */}
      <div
        className="scallop"
        style={{ '--scallop-top': '#FAF6EA', '--scallop-bottom': '#3E0818' } as CSSProperties}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(233,139,168,0.16)_0%,transparent_65%)]" />

      <div className="relative py-24 px-6">
        <SectionHeading overline="Client Love" title="Words from Happy Clients" tone="dark" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              className="relative p-8 pt-10 rounded-2xl border border-marigold/30 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="absolute top-3 left-6 font-cormorant text-rose-300/50 text-6xl leading-none select-none">
                &ldquo;
              </span>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-marigold text-sm">★</span>
                ))}
              </div>

              <blockquote className="font-cormorant italic text-cream/90 text-lg leading-relaxed mb-6">
                {t.review}
              </blockquote>

              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-rose" />
                <span className="font-sans text-[10px] font-medium tracking-[2.5px] uppercase text-marigold">
                  {t.name} · {t.occasion}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/reviews" variant="outlineLight">Read All Reviews</Button>
        </div>
      </div>

      {/* Scallop: wine petals dipping into the sage booking-steps surface */}
      <div
        className="scallop"
        style={{ '--scallop-top': '#3E0818', '--scallop-bottom': '#F4F5EA' } as CSSProperties}
      />
    </section>
  )
}

export default Testimonials
