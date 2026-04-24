import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="RiddhiSiddhi Creations" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-sans text-[11px] tracking-[2.5px] uppercase transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col border-t border-gold/10 bg-black">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-8 py-4 font-sans text-[11px] tracking-[2.5px] uppercase border-b border-gold/5 transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar