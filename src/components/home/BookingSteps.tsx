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
    <section className="py-24 px-6 bg-sage-50">
      <SectionHeading overline="How It Works" title="Three Simple Steps" />

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-8 left-[22%] right-[22%] h-px bg-gradient-to-r from-transparent via-sage/60 to-transparent hidden md:block" />

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
              <div className="w-16 h-16 rounded-full bg-cream border border-sage/70 flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(126,130,64,0.14)]">
                <span className="font-display text-rose-600 text-2xl font-semibold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-wine-800 text-lg font-semibold mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-henna text-sm leading-relaxed font-light max-w-xs">
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
