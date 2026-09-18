import { motion } from 'framer-motion'
import { Leaf, PenTool, Sparkles } from 'lucide-react'

/* Leaf-green chips echo the leaves in the logo */
const pillars = [
  {
    icon: Leaf,
    title: 'Organic & Natural',
    description: 'Safe, chemical-free henna that is gentle on every skin type and beautiful in depth of colour.',
  },
  {
    icon: PenTool,
    title: 'Custom Designs',
    description: 'Every design is tailored to your vision, your personality, and the occasion you are celebrating.',
  },
  {
    icon: Sparkles,
    title: 'Inspired Creations',
    description: 'Share your Pinterest board or a reference image. Siddhi will bring your vision to life.',
  },
]

function ValuePillars() {
  return (
    <section className="bg-cream-200 border-t border-marigold-600/30 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon
          return (
            <motion.div
              key={pillar.title}
              className="relative overflow-hidden flex flex-col items-center text-center px-8 py-12 bg-wine-800 border border-marigold/35 rounded-2xl shadow-[0_14px_36px_rgba(62,8,24,0.28)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            >
              {/* rose wash, matching the testimonials band */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(233,139,168,0.18)_0%,transparent_70%)]" />
              <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-sage-100 text-sage-700">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="relative font-display text-cream text-lg font-semibold mb-3">
                {pillar.title}
              </h3>
              <p className="relative font-sans text-cream/80 text-sm leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ValuePillars
