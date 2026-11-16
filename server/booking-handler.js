import { getSupabaseServerClient } from './supabase.js'

const allowedServices = new Set(['full-glam', 'soft-glam', 'bridal', 'home-service'])

function getValidationError(booking) {
  if (!booking || typeof booking !== 'object' || Array.isArray(booking)) {
    return 'Please submit valid booking details.'
  }

  const name = typeof booking.fullName === 'string' ? booking.fullName.trim() : ''
  const phone = typeof booking.phone === 'string' ? booking.phone.trim() : ''
  const digits = phone.replace(/\D/g, '').length

  if (!name || name.length > 200) return 'Please enter a valid full name.'
  if (!/^\+?[\d\s\-()]+$/.test(phone) || digits < 7 || digits > 15) {
    return 'Please enter a valid phone number with 7 to 15 digits.'
  }
  if (!allowedServices.has(booking.service)) return 'Please select a valid service.'
  if (
    typeof booking.date !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}$/.test(booking.date) ||
    booking.date < new Date().toISOString().slice(0, 10)
  ) {
    return 'Please select a valid appointment date that is not in the past.'
  }
  if (typeof booking.time !== 'string' || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(booking.time)) {
    return 'Please select a valid preferred time.'
  }
  if (booking.service === 'home-service' && (typeof booking.location !== 'string' || !booking.location.trim())) {
    return 'Please provide your location for home services.'
  }
  if (booking.policyAgreed !== true) return 'You must agree to the booking policy before submitting.'
  if (booking.notes != null && typeof booking.notes !== 'string') {
    return 'Please check the additional notes and try again.'
  }

  return null
}

function getDatabaseError(error) {
  if (error.code === '42501') {
    return {
      status: 403,
      message: 'The booking service rejected this request due to a permissions issue. Please contact us.',
    }
  }
  if (error.code === '42P01' || error.code === 'PGRST205' || error.code === 'PGRST204') {
    return {
      status: 503,
      message: 'The booking service is not available yet. Please contact us directly.',
    }
  }
  if (error.code === '23502' || error.code === '23514' || error.code === '22P02') {
    return {
      status: 400,
      message: 'Some booking details were rejected. Please check your details and try again.',
    }
  }
  return {
    status: 502,
    message: "We couldn't save your request. Please try again or contact us if the problem continues.",
  }
}

export default async function bookingHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const validationError = getValidationError(req.body)
  if (validationError) return res.status(400).json({ error: validationError })

  const booking = req.body
  const payload = {
    customer_name: booking.fullName.trim(),
    phone: booking.phone.trim(),
    service: booking.service,
    appointment_date: booking.date,
    preferred_time: booking.time,
    location: typeof booking.location === 'string' ? booking.location.trim() || null : null,
    notes: typeof booking.notes === 'string' ? booking.notes.trim() || null : null,
  }

  try {
    const { error } = await getSupabaseServerClient().from('bookings').insert(payload)

    if (error) {
      const databaseError = getDatabaseError(error)
      return res.status(databaseError.status).json({ error: databaseError.message })
    }

    return res.status(201).json({ ok: true })
  } catch (error) {
    if (error?.code === 'SUPABASE_SERVER_CONFIG_MISSING') {
      return res.status(503).json({ error: 'The booking service is not configured yet. Please contact us directly.' })
    }
    return res.status(502).json({
      error: "We couldn't confirm that your request was saved. Please contact us before trying again.",
    })
  }
}
