import React, { useEffect, useState } from 'react'
import { cardService } from '../../services/cardService'
import { Card } from '../../types/card'
import { CardModal } from '../../components/CardModal'
import { VibeCard } from '../../components/VibeCard'

// Board page component that displays all vibes from Supabase
export function Board() {
  // State to hold the cards/vibes fetched from Supabase
  const [cards, setCards] = useState<Card[]>([])
  
  // State to track loading status
  const [loading, setLoading] = useState(true)
  
  // State to hold any error messages
  const [error, setError] = useState<string | null>(null)

  // State to track which card is selected for modal display
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  // Fetch cards on component mount
  useEffect(() => {
    loadCards()
  }, [])

  // Function to load cards from Supabase
  const loadCards = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await cardService.getAllCards()
      setCards(data)
    } catch (err) {
      console.error('Failed to load cards:', err)
      setError('Failed to load vibes. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  // Function to open card in modal
  const handleCardClick = (card: Card) => {
    setSelectedCard(card)
  }

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    // Main container with dark background and overlay effects (matching homepage style)
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* Unified iridescent cloth effect with flowing waves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base iridescent cloth layer with flowing color gradients */}
        <div className="iridescent-cloth"></div>
        
        {/* Wave pattern overlay creating the ripple effect */}
        <div className="wave-pattern"></div>
        
        {/* Depth gradient for dimensional shimmer */}
        <div className="depth-gradient"></div>
      </div>

      {/* Grainy texture overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation bar at the top */}
        <nav className="flex justify-between items-center p-8">
          {/* Home link */}
          <a 
            href="/" 
            className="text-gray-300 hover:text-white text-lg font-light tracking-wide"
          >
            ← HOME
          </a>
        
        </nav>

        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-8 py-12">

          {/* Loading state */}
          {loading && (
            <div className="text-center text-gray-400 text-xl">
              Loading vibes...
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center text-red-400 text-xl">
              {error}
            </div>
          )}

          {/* Cards grid - masonry-style layout */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <VibeCard 
                  key={card.id} 
                  card={card} 
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && cards.length === 0 && (
            <div className="text-center text-gray-400 text-xl">
              No vibes yet. Start adding some!
            </div>
          )}
        </main>
      </div>

      {/* Card Modal - shows when a card is selected */}
      {selectedCard && (
        <CardModal 
          card={selectedCard} 
          isOpen={!!selectedCard} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

