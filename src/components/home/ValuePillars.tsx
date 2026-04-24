import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Organic & Natural',
    description: 'Safe, chemical-free henna that is gentle on every skin type and beautiful in depth of colour.',
  },
  {
    title: 'Custom Designs',
    description: 'Every design is tailored to your vision, your personality, and the occasion you are celebrating.',
  },
  {
    title: 'Inspired Creations',
    description: 'Share your Pinterest board or a reference image. Arpana will bring your vision to life.',
  },
]

function ValuePillars() {
  return (
    <section className="border-t border-b border-gold/12 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgba(201,162,77,0.055)_0%,transparent_70%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="flex flex-col items-center text-center px-10 py-14 border-b md:border-b-0 md:border-r border-gold/12 last:border-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
          >
            {/* Gold accent line */}
            <div className="w-6 h-0.5 bg-gold opacity-60 mb-6" />

            <h3 className="font-serif italic text-gold text-xl font-500 mb-4">
              {pillar.title}
            </h3>
            <p className="font-sans text-ivory/70 text-sm leading-relaxed font-300">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ValuePillars