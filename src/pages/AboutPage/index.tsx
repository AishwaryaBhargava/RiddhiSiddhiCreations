import { motion } from 'framer-motion'
import ArtistProfile from '../../components/about/ArtistProfile'
import Button from '../../components/ui/Button'
import SectionHeading from '../../components/ui/SectionHeading'

function AboutPage() {
  return (
    <div>

      {/* Page header */}
      <section className="py-20 px-6 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,rgba(201,162,77,0.07)_0%,transparent_65%)]">
        <SectionHeading title="About Arpana" />
      </section>

      {/* Artist profile */}
      <section className="border-t border-gold/10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,162,77,0.05)_0%,transparent_65%)]">
        <ArtistProfile />
      </section>

      {/* Philosophy quote */}
      <section className="py-20 px-6 bg-ivory border-t border-gold/15">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold opacity-35" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45 opacity-70" />
            <div className="w-10 h-px bg-gold opacity-35" />
          </div>
          <blockquote className="font-serif italic text-[#1a1410] text-2xl md:text-3xl font-400 leading-relaxed mb-8">
            "I do not just draw on skin — I capture your story, your personality, and your moment. That is what makes every design unrepeatable."
          </blockquote>
          <span className="font-sans text-[10px] tracking-[3px] uppercase text-gold">
            Arpana Bhargava
          </span>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gold/10 bg-[radial-gradient(ellipse_50%_70%_at_50%_50%,rgba(201,162,77,0.07)_0%,transparent_65%)]">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif italic text-ivory text-4xl font-500 max-w-lg leading-tight">
            Let your hands tell your story
          </h2>
          <Button to="/contact" variant="outline">
            Get in Touch
          </Button>
        </motion.div>
      </section>

    </div>
  )
}

export default AboutPage