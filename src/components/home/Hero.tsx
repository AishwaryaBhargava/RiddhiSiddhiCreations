import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.webp'
import Button from '../ui/Button'
import Ornament from '../ui/Ornament'

function Hero() {
  return (
    <section className="relative overflow-hidden hero-wash">
      {/* leaf-green watercolour at two edges, matching the leaves in the logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(126,130,64,0.20),transparent)]" />
        <div className="absolute -top-20 -right-16 w-[400px] h-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(126,130,64,0.14),transparent)]" />
      </div>

      <div className="relative z-10 min-h-[calc(100vh-72px)] flex flex-col items-center justify-center text-center px-6 py-16">

        <motion.img
          src={logo}
          alt="Riddhi Siddhi Creations, henna art"
          className="w-[340px] sm:w-[460px] md:w-[600px] lg:w-[680px] mb-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        <motion.h1
          className="font-display text-wine-800 text-2xl md:text-4xl lg:text-[44px] font-medium leading-[1.2] max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Exquisite Henna Art for Your <span className="text-rose-600">Special Moments</span>
        </motion.h1>

        <motion.p
          className="font-cormorant italic text-henna text-xl md:text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          by Siddhi Bhargava
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <Ornament className="my-7" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button to="/contact" variant="solid">Book Your Appointment</Button>
          <Button to="/gallery" variant="outlineDark">View Gallery</Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
