import { motion } from 'framer-motion'
import Ornament from './Ornament'

interface PageHeaderProps {
  overline: string
  title: string
  intro?: string
}

/* Inner-page header: the hero's watercolour wash in a shorter band */
function PageHeader({ overline, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden hero-wash border-b border-marigold-600/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[340px] rounded-full bg-[radial-gradient(closest-side,rgba(126,130,64,0.18),transparent)]" />
        <div className="absolute -top-20 -right-16 w-[360px] h-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(126,130,64,0.12),transparent)]" />
        <div className="absolute inset-0 dots-light opacity-40" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="font-sans text-[10px] font-medium tracking-[4.5px] uppercase text-rose-600 mb-3">
          {overline}
        </span>
        <h1 className="font-display text-wine-800 text-3xl md:text-5xl font-medium leading-tight">
          {title}
        </h1>
        <Ornament className="mt-5" />
        {intro && (
          <p className="font-cormorant italic text-henna text-lg md:text-xl mt-5 max-w-xl leading-relaxed">
            {intro}
          </p>
        )}
      </motion.div>
    </section>
  )
}

export default PageHeader
