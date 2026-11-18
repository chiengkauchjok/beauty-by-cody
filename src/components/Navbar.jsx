import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Booking Policy', href: '#booking-policy' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-pink-100/60'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/beauty-by-cody-logo.png"
              alt="Beauty by Cody logo"
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
            />
            <div className="leading-tight">
              <span className="font-display text-xl font-bold text-plum tracking-wide">Beauty by</span>
              <span className="font-display text-xl font-bold text-rose tracking-wide"> Cody</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-muted hover:text-rose transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); handleNavClick('#booking') }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose text-white text-sm font-semibold rounded-full shadow-lg shadow-pink-300/40 hover:bg-rose hover:shadow-pink-400/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-plum hover:bg-blush transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-pink-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="py-3 px-3 text-sm font-medium text-muted hover:text-rose hover:bg-blush rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); handleNavClick('#booking') }}
            className="mt-3 w-full text-center py-3 bg-rose text-white text-sm font-semibold rounded-full shadow-md shadow-pink-300/40 hover:bg-rose transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  )
}
