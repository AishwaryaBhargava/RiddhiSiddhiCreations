import logo from '../../assets/icons/logo.png'

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col items-center gap-4">

        {/* Logo */}
        <img
          src={logo}
          alt="RiddhiSiddhi Creations"
          className="h-16 w-auto opacity-90"
        />

        {/* Contact row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">

          {/* Instagram */}
          <a
            href="https://instagram.com/riddhisiddhicreations22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold/90 hover:text-gold transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span className="font-sans text-[12px] tracking-wide">@riddhisiddhicreations22</span>
          </a>

          <span className="text-gold/20 hidden sm:block">·</span>

          {/* Email */}
          <a
            href="mailto:bhargavasiddhi@gmail.com"
            className="flex items-center gap-2 text-ivory/80 hover:text-gold transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span className="font-sans text-[12px] tracking-wide">bhargavasiddhi@gmail.com</span>
          </a>

          <span className="text-gold/20 hidden sm:block">·</span>

          {/* Phone */}
          <a
            href="tel:4849952444"
            className="flex items-center gap-2 text-ivory/80 hover:text-gold transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="font-sans text-[12px] tracking-wide">484-995-2444</span>
          </a>

        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-gold/20 mt-1" />

        {/* Copyright */}
        <p className="font-sans text-[10px] tracking-[2px] uppercase text-ivory/50 text-center w-full">
            © {new Date().getFullYear()} RiddhiSiddhi Creations · by Arpana Bhargava
        </p>

      </div>
    </footer>
  )
}

export default Footer