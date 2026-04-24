import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.png'

const promises = [
  { title: '100+', subtitle: 'Happy Clients' },
  { title: 'Organic', subtitle: 'Always Safe' },
  { title: 'Custom', subtitle: 'Every Design' },
  { title: 'Nationwide', subtitle: 'We Travel to You' },
]

const storyBlocks = [
  {
    title: 'My Story',
    body: 'What started as a quiet passion for mehndi has grown into something far more meaningful. I am Arpana — a professionally trained henna artist who fell in love with this craft not just for its beauty, but for the stories it tells. Every pattern I draw carries a piece of the person wearing it.',
  },
  {
    title: 'My Training',
    body: 'I trained formally in Indore, where I immersed myself in the rich traditions of Indian mehndi artistry. That foundation shaped everything — my eye for detail, my respect for the craft, and my belief that every design deserves the same level of care regardless of its size.',
  },
  {
    title: 'My Approach',
    body: 'I am never fully satisfied with my own work. Every piece I create pushes me to do better than the last. That restlessness is what keeps my designs fresh, original, and deeply personal. I do not work from templates — I work from you.',
  },
  {
    title: 'Organic Henna',
    body: 'I use only pure, natural organic henna in every session. No chemicals, no shortcuts. Your skin deserves the same care and intention that goes into the design itself. Safe, beautiful, and kind to every skin type.',
  },
]

function ArtistProfile() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

        {/* Left: portrait placeholder */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full max-w-sm aspect-[3/4] bg-gold/5 border border-gold/15 flex flex-col items-center justify-center gap-4">
            <img src={logo} alt="RiddhiSiddhi Creations" className="w-24 opacity-30" />
            <span className="font-sans text-[9px] tracking-[2.5px] uppercase text-gold/30">
              Portrait Photo
            </span>
          </div>
        </motion.div>

        {/* Right: story */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="font-sans text-[10px] tracking-[4px] uppercase text-gold block mb-3">
              The Artist
            </span>
            <h2 className="font-serif italic text-ivory text-4xl font-500 leading-tight mb-2">
              Arpana Bhargava
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold opacity-40" />
              <span className="font-sans text-[10px] tracking-[2px] uppercase text-gold/60">
                Henna Artist
              </span>
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
              <h4 className="font-sans text-[11px] tracking-[2.5px] uppercase text-gold/80 mb-2">
                {block.title}
              </h4>
              <p className="font-sans text-ivory/70 text-sm leading-relaxed font-300">
                {block.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Promise strip */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 border border-gold/12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {promises.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col items-center text-center py-10 px-6 border-gold/12 ${
              i < promises.length - 1 ? 'border-r' : ''
            }`}
          >
            <span className="font-serif italic text-gold text-3xl font-500 mb-2">
              {p.title}
            </span>
            <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-ivory/50">
              {p.subtitle}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ArtistProfile