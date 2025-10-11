import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Card } from '../types/card'

// Props interface for VibeCard component
interface VibeCardProps {
  card: Card
  onClick: () => void
}

// Individual card component to display a single vibe
// Supports title, markdown content, images, and YouTube videos
export function VibeCard({ card, onClick }: VibeCardProps) {
  
  // Helper function to extract YouTube video ID from various URL formats
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  return (
    // Glassy card with glassmorphism effect - clickable to open modal
    <div 
      onClick={onClick}
        className="group cursor-pointer backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
        >
      
      {/* Display image if present */}
      {card.image_url && (
        <div className="w-full aspect-video overflow-hidden">
          <img 
            src={card.image_url} 
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Display YouTube video if present */}
      {card.video_url && getYouTubeId(card.video_url) && (
        <div className="w-full aspect-video bg-black/20">
          <img
            src={`https://img.youtube.com/vi/${getYouTubeId(card.video_url)}/maxresdefault.jpg`}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card content section */}
      <div className="p-6">
        {/* Card title */}
        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors" style={{ fontFamily: "'Spectral', serif" }}>
          {card.title}
        </h3>

        {/* Description text */}
        {card.description && (
          <p className="text-gray-400 text-sm mb-4">
            {card.description}
          </p>
        )}

        {/* Markdown content preview (truncated) */}
        {card.content && (
          <div className="prose prose-invert prose-sm max-w-none text-gray-300 line-clamp-3">
            <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
              {card.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
