import { motion } from 'framer-motion'
import { instagramPosts } from '../../data/instagramPosts'
import SectionHeading from '../ui/SectionHeading'

function InstagramGrid() {
  return (
    <section className="py-24 px-6 border-t border-gold/8">
      <SectionHeading title="On Instagram" />

      {instagramPosts.length === 0 ? (
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-1 mb-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gold/5 border border-gold/10 flex items-center justify-center"
            >
              <span className="font-sans text-[9px] tracking-[2px] uppercase text-gold/20">
                IG
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-1 mb-10">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden relative group"
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
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ivory/0 group-hover:text-ivory/80 transition-all duration-300"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {/* Follow CTA */}
      <div className="flex flex-col items-center gap-3">
        <a
          href="https://instagram.com/riddhisiddhicreations22"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans text-[11px] tracking-[2px] uppercase text-gold/80 hover:text-gold transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          Follow @riddhisiddhicreations22
        </a>
      </div>
    </section>
  )
}

export default InstagramGrid