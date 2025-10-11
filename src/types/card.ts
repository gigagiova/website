// Card interface representing the data structure from Supabase
export interface Card {
  id: string
  title: string
  description?: string // Short description text (optional)
  content?: string // Markdown text content (optional)
  image_url?: string // URL to an image (optional)
  video_url?: string // YouTube video URL (optional)
  created_at: string
}

