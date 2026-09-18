import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import Ornament from './Ornament'

interface CTABandProps {
  title: string
  label: string
  to?: string
  /* colour of the section above, so the top scallop meets it exactly */
  fromColor?: string
  /* set false when the section above is already wine, so the bands merge */
  topScallop?: boolean
}

/* Wine call-to-action band with scalloped edges; closes every page before the blush footer */
function CTABand({ title, label, to = '/contact', fromColor = '#FAF6EA', topScallop = true }: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-wine-600 via-wine-800 to-wine-900">
      {topScallop && (
        <div
          className="scallop relative z-10"
          style={{ '--scallop-top': fromColor, '--scallop-bottom': '#6A1030' } as CSSProperties}
        />
      )}
      <div className="absolute inset-0 dots-dark opacity-70 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(233,139,168,0.22)_0%,transparent_65%)]" />

      <motion.div
        className="relative py-24 px-6 flex flex-col items-center text-center gap-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-cream text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight max-w-2xl">
          {title}
        </h2>
        <Ornament tone="dark" />
        <Button to={to} variant="solid">{label}</Button>
      </motion.div>

      <div
        className="scallop relative z-10"
        style={{ '--scallop-top': '#2E0412', '--scallop-bottom': '#FBE6DC' } as CSSProperties}
      />
    </section>
  )
}

export default CTABand
