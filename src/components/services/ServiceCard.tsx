import { motion } from 'framer-motion'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-stretch border-b border-gold/10 ${isEven ? 'bg-black' : 'bg-[#0D0C0C]'}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Gold left accent */}
      <div className="w-full md:w-1 bg-gold/40 md:bg-gold/50 h-0.5 md:h-auto" />

      {/* Content */}
      <div className="flex-1 px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">

        {/* Name and description */}
        <div className="flex-1">
          <h3 className="font-serif italic text-gold text-2xl font-500 mb-3">
            {service.name}
          </h3>
          <p className="font-sans text-ivory/70 text-sm leading-relaxed font-300 max-w-xl">
            {service.description}
          </p>
          {service.note && (
            <p className="font-sans text-gold/50 text-[11px] tracking-wide mt-3">
              {service.note}
            </p>
          )}
        </div>

        {/* Duration and price */}
        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] tracking-[2px] uppercase text-ivory/40">
              Duration
            </span>
            <span className="font-sans text-[11px] text-ivory/70">
              {service.duration}
            </span>
          </div>

          <div className="px-5 py-2 border border-gold/40 bg-gold/5">
            <span className="font-sans text-[11px] tracking-[1px] text-gold">
              {service.price}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default ServiceCard