import { motion } from 'framer-motion'

const factors = [
  'Design complexity and intricacy',
  'Duration of the session',
  'Number of people',
  'Travel and accommodation',
  'Type of event or occasion',
]

function PricingInfo() {
  return (
    <section className="py-20 px-6 bg-ivory border-t border-gold/15">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-[10px] tracking-[4px] uppercase text-gold block mb-3">
            Pricing Philosophy
          </span>
          <h2 className="font-serif italic text-black text-4xl font-500 mb-4">
            What Affects Your Quote
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-gold opacity-35" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-70" />
            <div className="w-10 h-px bg-gold opacity-35" />
          </div>
        </motion.div>

        {/* Factors grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {factors.map((factor, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-4 border border-gold/20 bg-white/50"
            >
              <div className="w-1 h-8 bg-gold/50 shrink-0" />
              <span className="font-sans text-[12px] text-[#5a5450] leading-snug">
                {factor}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Travel policy */}
        <motion.div
          className="border border-gold/25 bg-white/60 px-8 py-6 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-1 h-full bg-gold/50 shrink-0 self-stretch" />
            <div>
              <h4 className="font-serif italic text-[#1a1410] text-lg mb-2">
                Travel Policy
              </h4>
              <p className="font-sans text-[13px] text-[#6a6460] leading-relaxed">
                Arpana is available nationwide for all events. Travel and accommodation
                are billed separately based on distance and duration. Final pricing is
                always confirmed personally during your inquiry.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="font-sans text-[11px] text-[#9a9490] text-center leading-relaxed">
          All prices shown are starting rates. Final quotes are discussed and confirmed
          personally with Arpana based on your specific requirements.
        </p>

      </div>
    </section>
  )
}

export default PricingInfo