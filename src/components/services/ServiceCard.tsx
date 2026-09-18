import { motion } from 'framer-motion'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row md:items-center gap-6 bg-cream border border-marigold-600/40 rounded-2xl pl-8 pr-8 py-8 md:pl-10 shadow-[0_10px_30px_rgba(107,58,30,0.08)] overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Wine accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-wine-600 via-wine-800 to-wine-600" />

      <div className="flex-1">
        <h3 className="font-display text-wine-800 text-xl md:text-2xl font-semibold mb-2">
          {service.name}
        </h3>
        <p className="font-sans text-henna text-sm leading-relaxed font-light max-w-xl">
          {service.description}
        </p>
        {service.note && (
          <p className="font-cormorant italic text-sage-700 text-base mt-3">
            {service.note}
          </p>
        )}
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[10px] tracking-[2px] uppercase text-wine-700/60">Duration</span>
          <span className="font-sans text-[12px] text-wine-800">{service.duration}</span>
        </div>
        <div className="px-5 py-2 rounded-full bg-wine-800 shadow-[0_6px_18px_rgba(62,8,24,0.25)]">
          <span className="font-sans text-[11px] font-medium tracking-[1px] text-marigold">
            {service.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
