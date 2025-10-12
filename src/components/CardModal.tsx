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
      className="fixed inset-0 z-50 flex items-center justify-center sm:p-6 md:p-8"
      onClick={onClose}
    >
        {/* Modal content container - glassy darker card. On mobile: full screen. On larger screens: centered with padding */}
        <div 
          className="relative w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] overflow-y-auto bg-black/40 backdrop-blur-xl sm:rounded-3xl sm:border sm:border-white/20 shadow-2xl"
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

        {/* Check if card has media (image or video) */}
        {card.image_url ? (
          // Display image with superimposed title and description
          <div className="w-full aspect-video overflow-hidden sm:rounded-t-3xl relative">
            <img 
              src={card.image_url} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Title and description superimposed on image */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-spectral">
                {card.title}
              </h2>
              {card.description && (
                <p className="text-gray-200 text-lg mt-2 leading-relaxed font-georgia">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ) : card.video_url && getYouTubeId(card.video_url) ? (
          // Display YouTube video with superimposed title and description
          <div className="w-full aspect-video sm:rounded-t-3xl overflow-hidden relative">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(card.video_url)}`}
              title={card.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            
            {/* Title and description superimposed on video */}
            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-spectral">
                {card.title}
              </h2>
              {card.description && (
                <p className="text-gray-200 text-lg mt-2 leading-relaxed font-georgia">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ) : null}

        {/* Content section */}
        <div className="px-8 py-10 md:px-12 md:py-12">
          {/* For text-only cards, show title and description here */}
          {!card.image_url && !card.video_url && (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-spectral">
                {card.title}
              </h2>
              {card.description && (
                <p className="text-gray-300 text-xl mb-8 leading-relaxed font-georgia">
                  {card.description}
                </p>
              )}
            </>
          )}

          {/* Markdown content - shown for all cards if present */}
          {card.content && (
            <div className="prose prose-invert text-xl max-w-none text-gray-200 leading-[1.6] space-y-6 font-georgia">
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

