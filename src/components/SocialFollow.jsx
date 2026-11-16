import { Instagram, Facebook, Music2 } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cody__mosco_g?obrf=MXVheGV1bjZ3aHJkNw%3D%3D&utm_source=qr',
    Icon: Instagram,
    iconClass: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
    label: 'Visit Beauty by Cody on Instagram',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1BzKjiKjbS/?mibextid=wwXIfr',
    Icon: Facebook,
    iconClass: 'bg-[#1877F2]',
    label: 'Visit Beauty by Cody on Facebook',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@codymosco1',
    Icon: Music2,
    iconClass: 'bg-[#010101]',
    label: 'Visit Beauty by Cody on TikTok',
  },
]

export default function SocialFollow() {
  return (
    <section
      aria-labelledby="social-follow-heading"
      className="border-t border-gold/30 bg-gradient-to-br from-blush via-lightPink to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="social-follow-heading"
          className="font-display text-4xl font-bold text-plum sm:text-5xl lg:text-6xl"
        >
          Follow Beauty by Cody
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Stay inspired! Follow us for beautiful makeup looks, latest styles, beauty tips, and updates.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {socialLinks.map(({ name, href, Icon, iconClass, label }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center justify-center gap-4 rounded-2xl border border-pink-200 bg-white/90 p-5 text-plum shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-rose/50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose sm:flex-col sm:gap-3 sm:p-7"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform duration-200 group-hover:scale-110 ${iconClass}`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
