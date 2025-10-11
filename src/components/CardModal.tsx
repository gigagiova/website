import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Card } from '../types/card'

// Props interface for CardModal component
interface CardModalProps {
  card: Card
  isOpen: boolean
  onClose: () => void
}

// Modal component to display card details in foreground with glassy background
export function CardModal({ card, isOpen, onClose }: CardModalProps) {
  
  // Helper function to extract YouTube video ID from various URL formats
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Don't render if not open
  if (!isOpen) return null

  return (
    // Full screen overlay - no dark background, click outside to close
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Modal content container - glassy transparent card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/8 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white hover:text-gray-200 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Display image if present */}
        {card.image_url && (
          <div className="w-full aspect-video overflow-hidden rounded-t-3xl">
            <img 
              src={card.image_url} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Display YouTube video if present */}
        {card.video_url && getYouTubeId(card.video_url) && (
          <div className="w-full aspect-video rounded-t-3xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(card.video_url)}`}
              title={card.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* Modal content section */}
        <div className="p-8">
          {/* Card title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Spectral', serif" }}>
            {card.title}
          </h2>

          {/* Description text */}
          {card.description && (
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {card.description}
            </p>
          )}

          {/* Full markdown content */}
          {card.content && (
            <div className="prose prose-invert prose-lg max-w-none text-gray-200">
              <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
                {card.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

