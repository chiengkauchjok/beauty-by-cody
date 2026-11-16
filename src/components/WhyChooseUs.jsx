import { Star, Gem, Eye, Heart, Calendar } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'Professional Makeup Services',
    description: 'Professional makeup for special occasions, shaped around your features and style.',
    color: 'text-gold',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Gem,
    title: 'Quality Beauty Products',
    description: 'Quality beauty products selected to suit the look and finish you want.',
    color: 'text-primary',
    bg: 'bg-lightPink',
    border: 'border-pink-100',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Every contour, highlight and blend is done with precision to create a truly polished finish.',
    color: 'text-rose',
    bg: 'bg-rose/5',
    border: 'border-rose/10',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Your comfort, confidence and happiness are at the heart of everything we do.',
    color: 'text-primary',
    bg: 'bg-lightPink',
    border: 'border-pink-100',
  },
  {
    icon: Calendar,
    title: 'Convenient Booking',
    description: 'Share your preferred date and time in a few simple steps.',
    color: 'text-plum',
    bg: 'bg-blush',
    border: 'border-pink-200',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-1.5 rounded-full text-sm font-medium">
            <Heart className="w-3.5 h-3.5 text-primary" fill="#E91E83" />
            Why Clients Love Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum">
            Why Choose{' '}
            <span className="text-primary italic">Beauty by Cody?</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            We go beyond makeup — we create an experience of beauty, confidence and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className={`group relative rounded-3xl p-7 border ${feat.bg} ${feat.border} hover:shadow-lg hover:shadow-pink-100/60 transition-all duration-300 hover:-translate-y-1`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm border ${feat.border} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${feat.color}`} />
                </div>

                <h3 className="font-display text-xl font-bold text-plum mb-3 group-hover:text-rose transition-colors">
                  {feat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{feat.description}</p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-tl-none rounded-br-none rounded-tr-3xl opacity-20 overflow-hidden pointer-events-none">
                  <div className={`w-full h-full ${feat.bg}`} />
                </div>
              </div>
            )
          })}

          {/* CTA Card */}
          <div className="relative rounded-3xl p-7 bg-gradient-to-br from-rose to-rose overflow-hidden hover:shadow-xl hover:shadow-pink-400/40 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border-4 border-white" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-4 border-white" />
            </div>
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-2">Ready to glow?</p>
              <h3 className="font-display text-2xl font-bold text-white mb-4 leading-snug">
                Book Your Beauty Experience Today
              </h3>
              <button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-rose font-semibold text-sm rounded-full hover:bg-lightPink transition-colors shadow-md"
              >
                <Star className="w-4 h-4 text-gold" fill="#D4AF37" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
