import { createClient } from '@supabase/supabase-js'

// Supabase client configuration for read-only access
// The anon key provides read-only access by default (configure RLS policies in Supabase)
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || ''
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || ''

// Create and export the Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

