import { Instagram, Facebook, Music2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Booking Policy', href: '#booking-policy' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-plum text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold">
                Beauty by <span className="text-pink-200">Cody</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm text-sm">
              Professional makeup services designed to make you look and feel your most beautiful and confident self.
              Every face tells a story — let us help you tell yours beautifully.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/60 hover:text-pink-200 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('#booking')}
                  className="text-pink-200 font-semibold text-sm hover:text-white transition-colors"
                >
                  Book Appointment →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-white/60 hover:text-pink-200 transition-colors text-sm" href="tel:+211920207498">
                  +211 920 207 498
                </a>
              </li>
              <li>
                <a
                  className="text-white/60 hover:text-pink-200 transition-colors text-sm"
                  href="https://wa.me/211920207498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Beauty by Cody
                </a>
              </li>
              <li>
                <a
                  className="text-white/60 hover:text-pink-200 transition-colors text-sm"
                  href="https://www.tiktok.com/@codymosco1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok @codymosco1
                </a>
              </li>
              <li>
                <a
                  className="break-all text-white/60 hover:text-pink-200 transition-colors text-sm"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ayuenmosco50%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ayuenmosco50@gmail.com
                </a>
              </li>
              <li className="text-white/60 text-sm">Business location coming soon</li>
            </ul>
            <div className="flex flex-wrap gap-3" aria-label="Social media">
              <a
                href="https://www.instagram.com/cody__mosco_g?obrf=MXVheGV1bjZ3aHJkNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Beauty by Cody on Instagram"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1BzKjiKjbS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Beauty by Cody on Facebook"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#166FE5] hover:shadow-lg"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@codymosco1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Beauty by Cody on TikTok"
                className="inline-flex items-center gap-2 rounded-full bg-[#010101] px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#242424] hover:shadow-lg"
              >
                <Music2 className="h-4 w-4" aria-hidden="true" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="nextlogic-promo-heading"
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-pink-200">
              NextLogic Tech <span className="text-white/50">· Your Digital Growth Partner.</span>
            </p>
            <h2 id="nextlogic-promo-heading" className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Need a Professional Website for Your Business?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              We build modern, responsive websites and digital solutions that help businesses grow online.
            </p>
          </div>
          <a
            href="https://nextlogic-tech1234.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose hover:shadow-lg lg:mt-0"
          >
            Visit NextLogic Tech
          </a>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Beauty by Cody. All rights reserved.
          </p>
          <p className="font-display text-pink-200 text-sm italic text-center">
            "Look Good. Feel Amazing. Be Confident."
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-white/40">
          Website designed &amp; developed by{' '}
          <a
            href="https://nextlogic-tech1234.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-pink-200"
          >
            NextLogic Tech
          </a>
        </p>
      </div>
    </footer>
  )
}
