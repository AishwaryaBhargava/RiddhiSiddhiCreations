import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons/logo.webp'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative font-sans text-[11px] font-medium tracking-[2.5px] uppercase transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-rose-600 after:transition-all after:duration-300 ${
    isActive ? 'text-rose-600 after:w-full' : 'text-wine-700/85 hover:text-rose-600 after:w-0 hover:after:w-full'
  }`

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blush/95 backdrop-blur-sm border-b border-marigold-600/35">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">

        {/* The logo carries the name, so no separate wordmark */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Riddhi Siddhi Creations" className="h-[58px] w-auto" />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
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
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-wine-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-wine-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-wine-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col border-t border-marigold-600/30 bg-blush">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-8 py-4 font-sans text-[11px] font-medium tracking-[2.5px] uppercase border-b border-marigold-600/25 transition-colors duration-300 ${
                    isActive ? 'text-rose-600' : 'text-wine-700/85 hover:text-rose-600'
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
