import { useEffect, useRef, useState } from 'react'
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react'
import { submitBooking } from '../lib/bookings.js'

const services = [
  { value: '', label: 'Select a service...' },
  { value: 'full-glam', label: 'Full Glam – 250,000 SSP' },
  { value: 'soft-glam', label: 'Soft Glam – 200,000 SSP' },
  { value: 'bridal', label: 'Bridal Makeup – $100 USD' },
  { value: 'home-service', label: 'Home Services – 300,000 SSP' },
]

const initialForm = {
  fullName: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  location: '',
  notes: '',
  policyAgreed: false,
}

const inputClasses =
  'w-full px-4 py-3 rounded-xl border border-pink-200 bg-white text-plum placeholder-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'

const labelClasses = 'block text-sm font-semibold text-plum mb-1.5'

function getLocalDate() {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

function createBookingPayload(form) {
  return {
    fullName: form.fullName.trim(),
    phone: form.phone.trim(),
    service: form.service,
    date: form.date,
    time: form.time,
    location: form.location.trim() || null,
    notes: form.notes.trim() || null,
    policyAgreed: form.policyAgreed,
  }
}

export default function Booking({ selectedService = '', onServiceChange }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [request, setRequest] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const submissionLock = useRef(false)

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }))
      setErrors((prev) => ({ ...prev, service: undefined }))
    }
  }, [selectedService])

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    else {
      const digits = form.phone.replace(/\D/g, '').length
      if (!/^\+?[\d\s\-()]+$/.test(form.phone.trim()) || digits < 7 || digits > 15)
        errs.phone = 'Please enter a valid phone number with 7 to 15 digits.'
    }
    if (!services.some((service) => service.value && service.value === form.service))
      errs.service = 'Please select a valid service.'
    if (!form.date) errs.date = 'Please select an appointment date.'
    else {
      if (form.date < getLocalDate()) errs.date = 'Appointment date cannot be in the past.'
    }
    if (!form.time) errs.time = 'Please select a preferred time.'
    if (form.service === 'home-service' && !form.location.trim())
      errs.location = 'Please provide your location for home services.'
    if (!form.policyAgreed) errs.policyAgreed = 'You must agree to the booking policy before submitting.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (name === 'service') onServiceChange?.(value)
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSubmissionError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submissionLock.current) return

    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    submissionLock.current = true
    setIsSubmitting(true)
    setSubmissionError('')

    try {
      await submitBooking(createBookingPayload(form))
      setRequest({ fullName: form.fullName.trim() })
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We couldn't confirm that your request was saved. Please contact us before trying again.",
      )
    } finally {
      submissionLock.current = false
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setRequest(null)
    setSubmissionError('')
    submissionLock.current = false
    onServiceChange?.('')
  }

  if (request) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-br from-lightPink to-white">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="font-display text-3xl font-bold text-plum">Booking request submitted</h2>
          <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-md text-left space-y-3">
            <p className="text-muted leading-relaxed">
              Your request has been saved, <span className="font-semibold text-rose">{request.fullName}</span>. It is pending and is not confirmed until the 50% non-refundable deposit is received and verified.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700">
                <span className="font-semibold">No appointment is confirmed.</span> Your booking remains pending until the 50% deposit is verified.
              </p>
            </div>
          </div>
          <button type="button" onClick={handleReset} className="px-6 py-3 bg-rose text-white rounded-full font-semibold hover:bg-rose transition-colors">
            Submit Another Request
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-lightPink to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blush text-rose px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Book Your Look
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-plum">
            Request an <span className="text-primary italic">Appointment</span>
          </h2>
          <p className="text-muted max-w-md mx-auto leading-relaxed">
            Share your preferred date and look. Your request will remain pending until the deposit is verified.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-pink-200/40 border border-pink-100 overflow-hidden">
          {/* Top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-rose to-gold" />

          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-6">
            {/* Row 1 – Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className={labelClasses}>Full Name <span className="text-rose">*</span></label>
                <input
                  id="fullName" name="fullName" type="text"
                  required
                  placeholder="Your full name"
                  value={form.fullName} onChange={handleChange}
                  className={`${inputClasses} ${errors.fullName ? 'border-rose ring-1 ring-rose/30' : ''}`}
                />
                {errors.fullName && <p className="mt-1 text-xs text-rose">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>Phone Number <span className="text-rose">*</span></label>
                <input
                  id="phone" name="phone" type="tel"
                  required
                  placeholder="Your phone number"
                  value={form.phone} onChange={handleChange}
                  className={`${inputClasses} ${errors.phone ? 'border-rose ring-1 ring-rose/30' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-rose">{errors.phone}</p>}
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className={labelClasses}>Makeup Service <span className="text-rose">*</span></label>
              <select
                id="service" name="service"
                required
                value={form.service} onChange={handleChange}
                className={`${inputClasses} ${errors.service ? 'border-rose ring-1 ring-rose/30' : ''}`}
              >
                {services.map((s) => (
                  <option key={s.value} value={s.value} disabled={s.value === ''}>{s.label}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-xs text-rose">{errors.service}</p>}
            </div>

            {/* Row 2 – Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className={labelClasses}>Appointment Date <span className="text-rose">*</span></label>
                <input
                  id="date" name="date" type="date"
                  required
                  value={form.date} onChange={handleChange}
                  min={getLocalDate()}
                  className={`${inputClasses} ${errors.date ? 'border-rose ring-1 ring-rose/30' : ''}`}
                />
                {errors.date && <p className="mt-1 text-xs text-rose">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="time" className={labelClasses}>Preferred Time <span className="text-rose">*</span></label>
                <select
                  id="time" name="time"
                  required
                  value={form.time} onChange={handleChange}
                  className={`${inputClasses} ${errors.time ? 'border-rose ring-1 ring-rose/30' : ''}`}
                >
                  <option value="">Select a time...</option>
                  <option value="07:00">7:00 AM</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
                {errors.time && <p className="mt-1 text-xs text-rose">{errors.time}</p>}
              </div>
            </div>

            {/* Location (shown always, required only for home service) */}
            <div>
              <label htmlFor="location" className={labelClasses}>
                Location {form.service === 'home-service' && <span className="text-rose">*</span>}
                {form.service !== 'home-service' && <span className="text-muted/60 font-normal text-xs ml-1">(required for Home Services)</span>}
              </label>
              <input
                id="location" name="location" type="text"
                required={form.service === 'home-service'}
                placeholder="Your address or area (required for home services)"
                value={form.location} onChange={handleChange}
                className={`${inputClasses} ${errors.location ? 'border-rose ring-1 ring-rose/30' : ''}`}
              />
              {errors.location && <p className="mt-1 text-xs text-rose">{errors.location}</p>}
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className={labelClasses}>Additional Notes <span className="text-muted/60 font-normal text-xs">(optional)</span></label>
              <textarea
                id="notes" name="notes"
                rows={3}
                placeholder="Any special requests, skin concerns, reference photos, etc."
                value={form.notes} onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Policy Checkbox */}
            <div className={`rounded-xl p-4 border ${errors.policyAgreed ? 'bg-rose/5 border-rose/30' : 'bg-blush border-pink-200'}`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" name="policyAgreed"
                  required
                  checked={form.policyAgreed} onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-plum leading-relaxed">
                  I have read and agree to the{' '}
                  <button
                    type="button"
                    onClick={() => document.querySelector('#booking-policy')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-rose font-semibold underline underline-offset-2 hover:text-rose"
                  >
                    booking policy
                  </button>
                  , including the <span className="font-semibold text-rose">50% non-refundable deposit</span> requirement.
                </span>
              </label>
              {errors.policyAgreed && <p className="mt-2 text-xs text-rose ml-7">{errors.policyAgreed}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-rose text-white font-semibold text-base rounded-full shadow-lg shadow-pink-300/40 hover:bg-rose hover:shadow-pink-400/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {isSubmitting ? 'Submitting...' : 'Request Appointment'}
            </button>

            {submissionError && (
              <p role="alert" className="text-center text-sm text-rose">
                {submissionError}
              </p>
            )}

            <p className="text-center text-xs text-muted/70">
              Your request will remain pending until the 50% deposit is verified. An appointment is not confirmed before then.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
