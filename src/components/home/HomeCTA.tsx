import { motion } from 'framer-motion'
import Button from '../ui/Button'

function HomeCTA() {
  return (
    <section className="py-24 px-6 border-t border-gold/12 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(201,162,77,0.08)_0%,transparent_65%)]">
      <motion.div
        className="flex flex-col items-center text-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-serif italic text-ivory text-4xl md:text-5xl font-500 leading-tight max-w-xl">
          Ready to Make Your Occasion Unforgettable?
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-gold opacity-35" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-70" />
          <div className="w-10 h-px bg-gold opacity-35" />
        </div>

        <Button to="/contact" variant="outline">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  )
}

export default HomeCTA