import { Mail, Phone } from 'lucide-react'
import logo from '../../assets/icons/logo.webp'
import Ornament from '../ui/Ornament'
import { contact } from '../../data/contact'

/* lucide-react no longer ships brand icons, so Instagram is an inline glyph */
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const linkClass = 'flex items-center gap-2 text-wine-700/85 hover:text-rose-600 transition-colors duration-300'

function Footer() {
  return (
    <footer className="bg-blush border-t border-marigold-600/30">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col items-center gap-5">

        <img src={logo} alt="Riddhi Siddhi Creations" className="h-28 w-auto" />

        <p className="font-cormorant italic text-henna text-lg">
          Exquisite henna art for your special moments
        </p>

        {/* Contact row */}
        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <InstagramIcon />
            <span className="font-sans text-[12px] tracking-wide">{contact.instagramHandle}</span>
          </a>
          <span className="text-marigold-600/50 hidden sm:block">•</span>
          <a href={`mailto:${contact.email}`} className={linkClass}>
            <Mail size={14} strokeWidth={1.5} />
            <span className="font-sans text-[12px] tracking-wide">{contact.email}</span>
          </a>
          <span className="text-marigold-600/50 hidden sm:block">•</span>
          <a href={contact.phoneHref} className={linkClass}>
            <Phone size={14} strokeWidth={1.5} />
            <span className="font-sans text-[12px] tracking-wide">{contact.phoneDisplay}</span>
          </a>
        </div>

        <Ornament className="mt-1" />

        <p className="font-sans text-[10px] tracking-[2px] uppercase text-wine-700/70 text-center w-full">
          © {new Date().getFullYear()} Riddhi Siddhi Creations · by Siddhi Bhargava
        </p>
      </div>
    </footer>
  )
}

export default Footer
