import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.webp'

const promises = [
  { title: '100+', subtitle: 'Happy Clients' },
  { title: 'Organic', subtitle: 'Always Safe' },
  { title: 'Custom', subtitle: 'Every Design' },
  { title: 'Nationwide', subtitle: 'We Travel to You' },
]

const storyBlocks = [
  {
    title: 'My Story',
    body: 'What started as a quiet passion for mehndi has grown into something far more meaningful. I am Siddhi, a professionally trained henna artist who fell in love with this craft not just for its beauty, but for the stories it tells. Every pattern I draw carries a piece of the person wearing it.',
  },
  {
    title: 'My Training',
    body: 'I trained formally in Indore, where I immersed myself in the rich traditions of Indian mehndi artistry. That foundation shaped everything: my eye for detail, my respect for the craft, and my belief that every design deserves the same level of care regardless of its size.',
  },
  {
    title: 'My Approach',
    body: 'I am never fully satisfied with my own work. Every piece I create pushes me to do better than the last. That restlessness is what keeps my designs fresh, original, and deeply personal. I do not work from templates. I work from you.',
  },
  {
    title: 'Organic Henna',
    body: 'I use only pure, natural organic henna in every session. No chemicals, no shortcuts. Your skin deserves the same care and intention that goes into the design itself. Safe, beautiful, and kind to every skin type.',
  },
]

function ArtistProfile() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 mb-20">

        {/* Portrait placeholder until a photo is provided */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-cream-200 border border-henna-400/25 shadow-[0_14px_36px_rgba(107,58,30,0.12)] flex flex-col items-center justify-center gap-4 overflow-hidden">
            <img src={logo} alt="" className="w-40 opacity-40" />
            <span className="font-sans text-[9px] tracking-[3px] uppercase text-wine-600">
              Portrait Photo
            </span>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="font-sans text-[10px] font-medium tracking-[4px] uppercase text-rose-600 block mb-3">
              The Artist
            </span>
            <h2 className="font-display text-wine-800 text-3xl md:text-4xl font-medium leading-tight mb-3">
              Siddhi Bhargava
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-marigold-600/60" />
              <span className="font-cormorant italic text-henna text-lg">Henna Artist</span>
            </div>
          </div>

          {storyBlocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="font-display text-wine-700 text-sm font-semibold tracking-[1px] mb-2">
                {block.title}
              </h4>
              <p className="font-sans text-henna text-sm leading-relaxed font-light">
                {block.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Promise strip */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {promises.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden flex flex-col items-center text-center py-9 px-4 rounded-2xl bg-wine-800 border border-marigold/35 shadow-[0_14px_36px_rgba(62,8,24,0.28)]"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(233,139,168,0.18)_0%,transparent_70%)]" />
            <span className="relative font-display text-marigold text-2xl md:text-3xl font-semibold mb-2">
              {p.title}
            </span>
            <span className="relative font-sans text-[10px] tracking-[2.5px] uppercase text-cream/75">
              {p.subtitle}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ArtistProfile
