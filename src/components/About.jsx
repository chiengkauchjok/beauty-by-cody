import { Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-lightPink to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – Image */}
          <div className="relative flex justify-center">
            {/* Photo container */}
            <div className="relative w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-300/40">
              <img
                src="/images/ayeun.jpeg"
                alt="Portrait of Cody"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* Right – Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-1.5 rounded-full text-sm font-medium">
              <Award className="w-3.5 h-3.5" />
              About Beauty by Cody
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum leading-tight">
              Beauty Is Our{' '}
              <span className="text-primary italic">Passion</span>
            </h2>

            {/*
              EDITABLE BIOGRAPHY SECTION
              Replace the placeholder text below with the actual makeup artist's biography.
              You can include: her name, background, years of experience, training, style philosophy, etc.
            */}
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                <span className="font-semibold text-rose">Beauty by Cody</span> is a professional makeup service for life’s special moments.
                We create thoughtful, confidence-boosting looks that celebrate your features and personal style.
              </p>
              <p>
                From bridal makeup to a soft or full glam look, every appointment is guided by care,
                creativity and attention to detail.
              </p>
              <p>
                Cody’s personal introduction and background will be added here when those details are available.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
