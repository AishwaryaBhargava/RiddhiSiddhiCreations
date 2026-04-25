import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.png'
import Button from '../ui/Button'
import Divider from '../ui/Divider'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Radial gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_70%,rgba(201,162,77,0.09)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_40%,rgba(201,162,77,0.04)_0%,transparent_60%)]" />
      </div>

      {/* Ambient floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-1 h-1 rounded-full bg-gold/40 top-[28%] left-[18%]" />
        <div className="absolute w-0.5 h-0.5 rounded-full bg-gold/25 top-[20%] left-[74%]" />
        <div className="absolute w-1 h-1 rounded-full bg-gold/30 top-[65%] left-[85%]" />
        <div className="absolute w-0.5 h-0.5 rounded-full bg-gold/20 top-[72%] left-[12%]" />
        <div className="absolute w-1 h-1 rounded-full bg-gold/25 top-[85%] left-[60%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <motion.img
          src={logo}
          alt="RiddhiSiddhi Creations"
          className="w-28 md:w-36 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Tagline */}
        <motion.h1
          className="font-serif italic text-ivory text-3xl md:text-5xl lg:text-6xl font-500 leading-tight max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          Exquisite Henna Art for Your Special Moments
        </motion.h1>

        {/* Byline */}
        <motion.p
          className="font-sans text-[11px] tracking-[4px] uppercase text-gold mt-4 opacity-85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          by Siddhi Bhargava
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Divider />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button to="/contact" variant="outline">
            Book Your Appointment
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator — fixed to bottom, won't overlap content */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  )
}

export default Hero