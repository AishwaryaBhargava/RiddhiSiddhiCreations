import { motion } from 'framer-motion'
import SEO from '../../components/ui/SEO'
import PageHeader from '../../components/ui/PageHeader'
import ArtistProfile from '../../components/about/ArtistProfile'
import Ornament from '../../components/ui/Ornament'
import CTABand from '../../components/ui/CTABand'

function AboutPage() {
  return (
    <>
      <SEO
        title="About Siddhi"
        description="Meet Siddhi Bhargava — professionally trained henna artist, founder of Riddhi Siddhi Creations. 100+ happy clients, organic henna, and designs that tell your story."
      />
      <PageHeader
        overline="The Artist"
        title="About Siddhi"
        intro="A professionally trained henna artist with a deep-rooted love for mehndi and the stories it tells."
      />

      <section className="bg-cream">
        <ArtistProfile />
      </section>

      {/* Philosophy quote */}
      <section className="py-20 px-6 bg-sage-50 border-y border-sage/40">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Ornament className="mb-8" />
          <blockquote className="font-cormorant italic text-wine-800 text-2xl md:text-3xl leading-relaxed mb-6">
            &ldquo;I do not just draw on skin. I capture your story, your personality, and your moment.
            That is what makes every design unrepeatable.&rdquo;
          </blockquote>
          <span className="font-sans text-[10px] font-medium tracking-[3px] uppercase text-rose-600">
            Siddhi Bhargava
          </span>
        </motion.div>
      </section>

      <CTABand title="Let your hands tell your story" label="Get in Touch" fromColor="#F4F5EA" />
    </>
  )
}

export default AboutPage
