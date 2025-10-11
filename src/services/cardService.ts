import { supabase } from '../lib/supabase'
import { Card } from '../types/card'

// Service to fetch cards from Supabase (read-only)
export const cardService = {
  // Fetch all cards/vibes ordered by creation date (newest first)
  async getAllCards(): Promise<Card[]> {
    const { data, error } = await supabase
      .from('vibes')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching vibes:', error)
      throw error
    }
    
    return data || []
  }
}

