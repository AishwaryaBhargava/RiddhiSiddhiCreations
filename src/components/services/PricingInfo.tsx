import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const factors = [
  'Design complexity and intricacy',
  'Duration of the session',
  'Number of people',
  'Travel and accommodation',
  'Type of event or occasion',
]

function PricingInfo() {
  return (
    <section className="relative bg-gradient-to-b from-wine-800 to-wine-600 overflow-hidden">
      <div
        className="scallop"
        style={{ '--scallop-top': '#FAF6EA', '--scallop-bottom': '#3E0818' } as CSSProperties}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(233,139,168,0.16)_0%,transparent_65%)]" />
      <div className="absolute inset-0 dots-dark opacity-60 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-24">
        <SectionHeading overline="Pricing Philosophy" title="What Affects Your Quote" tone="dark" className="mb-12" />

        {/* Factors */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {factors.map((factor) => (
            <div
              key={factor}
              className="flex items-center gap-3 px-5 py-4 rounded-xl border border-marigold/30 bg-white/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sage-300 shrink-0" />
              <span className="font-sans text-[13px] text-cream/90 leading-snug">{factor}</span>
            </div>
          ))}
        </motion.div>

        {/* Travel policy */}
        <motion.div
          className="rounded-2xl border border-marigold/40 bg-white/5 px-8 py-7 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-display text-marigold text-lg font-semibold mb-2">Travel Policy</h4>
          <p className="font-sans text-[14px] text-cream/85 leading-relaxed font-light">
            Siddhi is available nationwide for all events. Travel and accommodation are billed
            separately based on distance and duration. Final pricing is always confirmed personally
            during your inquiry.
          </p>
        </motion.div>

        <p className="font-cormorant italic text-cream/70 text-base text-center leading-relaxed">
          All prices shown are starting rates. Final quotes are discussed and confirmed personally
          with Siddhi based on your specific requirements.
        </p>
      </div>

    </section>
  )
}

export default PricingInfo
