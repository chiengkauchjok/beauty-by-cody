import { createClient } from '@supabase/supabase-js'

let client

export function getSupabaseServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL?.trim()
  const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim()

  if (!supabaseUrl || !supabasePublishableKey) {
    const error = new Error('Supabase server environment is not configured.')
    error.code = 'SUPABASE_SERVER_CONFIG_MISSING'
    throw error
  }

  if (!client) {
    client = createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  }

  return client
}
