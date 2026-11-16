import bookingHandler from '../server/booking-handler.js'

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  return bookingHandler(req, res)
}
