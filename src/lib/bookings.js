export async function submitBooking(booking) {
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
  })

  let result
  try {
    result = await response.json()
  } catch {
    result = null
  }

  if (!response.ok || result?.ok !== true) {
    throw new Error(
      typeof result?.error === 'string'
        ? result.error
        : "We couldn't confirm that your request was saved. Please contact us before trying again.",
    )
  }
}
