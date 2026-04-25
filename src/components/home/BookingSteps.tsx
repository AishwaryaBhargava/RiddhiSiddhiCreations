import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    number: '1',
    title: 'Reach Out',
    description: 'Fill out a quick inquiry form with your occasion, date, and any design inspiration you have in mind.',
  },
  {
    number: '2',
    title: 'Discuss Your Vision',
    description: 'Siddhi will connect with you personally to understand your style and design preferences.',
  },
  {
    number: '3',
    title: 'Get Your Henna',
    description: 'Sit back and enjoy a calm, personal session as your design comes to life on your hands.',
  },
]

function BookingSteps() {
  return (
    <section className="py-24 px-6 bg-ivory">
      <SectionHeading overline="How It Works" title="Three Simple Steps" light />

      <div className="max-w-4xl mx-auto relative">

        {/* Connector line */}
        <div className="absolute top-7 left-[22%] right-[22%] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6 bg-ivory shadow-[0_0_0_6px_rgba(201,162,77,0.06)]">
                <span className="font-serif italic text-gold text-2xl font-500">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif italic text-[#1a1410] text-xl font-500 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-[#7a7370] text-sm leading-relaxed font-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingSteps