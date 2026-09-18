import { motion } from 'framer-motion'
import { instagramPosts } from '../../data/instagramPosts'
import SectionHeading from '../ui/SectionHeading'
import { contact } from '../../data/contact'

function InstagramIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function InstagramGrid() {
  return (
    <section className="py-24 px-6 bg-cream">
      <SectionHeading overline="Follow Our Journey" title="On Instagram" />

      {instagramPosts.length === 0 ? (
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2 mb-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-cream-200 border border-henna-400/25 flex items-center justify-center text-wine-600/60"
            >
              <InstagramIcon size={18} />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2 mb-10">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/45 transition-all duration-300 flex items-center justify-center">
                <InstagramIcon size={24} className="text-cream/0 group-hover:text-cream transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center gap-3">
        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans text-[11px] font-medium tracking-[2.5px] uppercase text-rose-600 hover:text-wine-800 transition-colors duration-300"
        >
          <InstagramIcon />
          Follow {contact.instagramHandle}
        </a>
      </div>
    </section>
  )
}

export default InstagramGrid
