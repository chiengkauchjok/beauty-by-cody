import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-lightPink via-white to-blush overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blush/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column – Text */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-pink-200 text-rose px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Look Good, Feel Amazing.
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-plum leading-tight">
              Enhance Your{' '}
              <span className="text-primary italic">Beauty</span>{' '}
              with Beauty by Cody
            </h1>

            {/* Subtext */}
            <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Professional makeup services designed to make you look and feel{' '}
              <span className="text-rose font-medium">confident</span> for every special occasion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose text-white font-semibold rounded-full shadow-xl shadow-pink-300/40 hover:bg-rose hover:shadow-pink-400/50 transition-all duration-300 hover:-translate-y-1 text-base"
              >
                Book Your Appointment
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose font-semibold rounded-full border-2 border-rose/20 shadow-md hover:border-rose hover:bg-lightPink transition-all duration-300 hover:-translate-y-1 text-base"
              >
                Explore Services
              </button>
            </div>

            <p className="pt-4 text-sm text-muted">
              <span className="font-semibold text-plum">A personal touch</span>
              {' '}for every special moment.
            </p>
          </div>

          {/* Right Column – Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-float pointer-events-none" />
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

            {/* Image container */}
            <div className="relative w-[320px] h-[400px] sm:w-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-300/40">
              <img
                src="/images/cody-hero.jpeg"
                alt="Cody, professional makeup artist"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blush/30 to-transparent" />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-xs text-muted">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted animate-bounce" />
        </div>
      </div>
    </section>
  )
}
