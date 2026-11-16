import { Phone, MapPin, MessageCircle, Instagram, Facebook, Mail, Music2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-lightPink to-blush">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white text-rose px-4 py-1.5 rounded-full text-sm font-medium shadow-sm border border-pink-100">
            <MessageCircle className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum">
            Contact <span className="text-primary italic">Us</span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Call, email or message us on WhatsApp to start planning your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Cards */}
          <div className="bg-white rounded-3xl p-7 border border-pink-100 shadow-md hover:shadow-lg transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-plum">Phone</h3>
            <p className="text-muted text-sm">Call or text us about your appointment.</p>
            <a className="text-rose font-semibold" href="tel:+211920207498">
              +211 920 207 498
            </a>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-pink-100 shadow-md hover:shadow-lg transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-plum">WhatsApp</h3>
            <p className="text-muted text-sm">Message us on WhatsApp about your booking.</p>
            <a
              href="https://wa.me/211920207498"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Beauty by Cody on WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-700 text-white font-semibold text-sm rounded-full hover:bg-green-800 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-pink-100 shadow-md hover:shadow-lg transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-plum">Location</h3>
            {/* ✏️ REPLACE: Add the actual business location/address */}
            <p className="text-muted text-sm">Business location details will be added here.</p>
            <p className="text-rose font-semibold text-sm">Location coming soon</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 bg-white rounded-3xl p-8 border border-pink-100 shadow-md">
          <h3 className="font-display text-2xl font-bold text-plum text-center mb-6">
            Follow Us on Social Media
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/cody__mosco_g?obrf=MXVheGV1bjZ3aHJkNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Beauty by Cody on Instagram"
              className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold text-sm rounded-full shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1BzKjiKjbS/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Beauty by Cody on Facebook"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#1877F2] text-white font-semibold text-sm rounded-full shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-[#166FE5] hover:shadow-lg"
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@codymosco1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Beauty by Cody on TikTok"
              className="flex items-center gap-2.5 px-5 py-3 bg-[#010101] text-white font-semibold text-sm rounded-full shadow-md transition-all duration-200 hover:-translate-y-1 hover:bg-[#242424] hover:shadow-lg"
            >
              <Music2 className="w-4 h-4" aria-hidden="true" />
              TikTok <span className="text-xs opacity-70">@codymosco1</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayuenmosco50%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-full items-center gap-2.5 px-5 py-3 bg-plum text-white font-semibold text-sm rounded-full hover:bg-plum/80 transition-colors shadow-md"
            >
              <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-all">ayuenmosco50@gmail.com</span>
            </a>
          </div>
          <p className="text-center text-xs text-muted/50 mt-5 italic">
            Follow Beauty by Cody across our social media platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
