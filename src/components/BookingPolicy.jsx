import { AlertCircle, Ban, Info } from 'lucide-react'

export default function BookingPolicy() {
  return (
    <section id="booking-policy" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose/10 text-rose px-4 py-1.5 rounded-full text-sm font-medium">
            <Info className="w-3.5 h-3.5" />
            Please Read Before Booking
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum">
            Important Booking <span className="text-primary italic">Information</span>
          </h2>
        </div>

        {/* Policy Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-pink-200/40 border border-pink-200">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-rose to-gold" />

          <div className="bg-gradient-to-br from-lightPink to-blush p-8 md:p-12 space-y-8">
            {/* Icon header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                <AlertCircle className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-plum">Booking Policy</h3>
                <p className="text-muted text-sm">Effective for all appointments with Beauty by Cody</p>
              </div>
            </div>

            {/* Policy Items */}
            <div className="space-y-5">
              {/* Policy 1 – Deposit */}
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose font-bold text-sm">1</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-plum text-lg">50% Deposit Required</h4>
                    <p className="text-muted leading-relaxed">
                      A <span className="font-semibold text-rose">50% deposit</span> must be paid before your actual appointment date
                      in order to secure your booking appointment. Your slot will not be confirmed until the deposit is received.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy 2 – Non-refundable */}
              <div className="bg-rose/5 rounded-2xl p-6 border border-rose/20 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Ban className="w-5 h-5 text-rose" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-rose text-lg flex items-center gap-2">
                      Non-Refundable Deposit
                    </h4>
                    <p className="text-muted leading-relaxed">
                      All deposits are <span className="font-bold text-rose uppercase">non-refundable</span>. By submitting a booking request and paying the deposit,
                      you agree to this policy. Please ensure you are committed to your appointment date before booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional notes */}
            <div className="border-t border-pink-200 pt-6">
              <p className="text-muted text-sm leading-relaxed text-center">
                By proceeding with a booking, you acknowledge that you have read, understood, and agreed to the above policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
