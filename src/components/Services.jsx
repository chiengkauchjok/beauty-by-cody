import { Sparkles } from 'lucide-react'

const services = [
  {
    id: 'full-glam',
    name: 'Full Glam',
    price: '250,000 SSP',
    description: 'A complete glamorous makeup experience for a stunning, confident look perfect for any grand occasion.',
    image: '/images/services/full-glam.jpg',
    imageAlt: 'Woman wearing full glam makeup with defined eyes and glossy lips',
    imagePosition: 'center 30%',
    badge: 'Most Popular',
    badgeColor: 'bg-rose text-white',
  },
  {
    id: 'soft-glam',
    name: 'Soft Glam',
    price: '200,000 SSP',
    description: 'A beautiful, soft and natural makeup look that enhances your natural features with elegant subtlety.',
    image: '/images/services/soft-glam.jpg',
    imageAlt: 'Woman wearing soft glam makeup with warm eyeshadow and nude lipstick',
    imagePosition: 'center 30%',
    badge: 'Natural',
    badgeColor: 'bg-blush text-rose',
  },
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    price: '$100 USD',
    description: 'Elegant bridal makeup designed to make your special day unforgettable. Timeless beauty for your big day.',
    image: '/images/services/bridal.jpg',
    imageAlt: 'Woman wearing elegant bridal makeup with defined eyes and a polished complexion',
    imagePosition: 'center 30%',
    badge: 'Premium',
    badgeColor: 'bg-gold text-white',
  },
  {
    id: 'home-service',
    name: 'Home Services',
    price: '300,000 SSP',
    description: 'Professional makeup services delivered conveniently at your location. Luxury that comes to you.',
    image: '/images/services/home-service.jpg',
    imageAlt: 'Close-up portrait of a smiling woman wearing smoky eye makeup',
    imagePosition: 'center 35%',
    badge: 'At Your Door',
    badgeColor: 'bg-rose text-white',
  },
]

export default function Services() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Our Expertise
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum">
            Our Makeup <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Discover the perfect beauty experience for your special occasion.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md shadow-pink-100/60 border border-pink-100/80 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-400 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: service.imagePosition }}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/30 to-transparent" />
                {/* Badge */}
                <span className={`absolute top-3 right-3 ${service.badgeColor} text-xs font-semibold px-3 py-1 rounded-full shadow-sm`}>
                  {service.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <h3 className="font-display text-xl font-bold text-plum group-hover:text-rose transition-colors">
                  {service.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary font-display">{service.price}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed">{service.description}</p>

                {/* Book Now Button */}
                <button
                  onClick={scrollToBooking}
                  className="w-full mt-2 py-2.5 bg-blush text-rose font-semibold text-sm rounded-full border border-pink-200 hover:bg-rose hover:text-white hover:border-rose transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted/70 text-sm mt-10">
          * Prices are in South Sudanese Pounds (SSP) unless noted otherwise. All bookings require a 50% non-refundable deposit.
        </p>
      </div>
    </section>
  )
}
