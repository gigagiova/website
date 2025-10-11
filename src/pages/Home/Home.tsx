import React from 'react'

// Home page component - main landing page
export function Home() {
  return (
    // Main container with dark background and overlay effects
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
        <nav className="flex justify-end gap-8 p-8">
          <a 
            href="https://blog.giova.io" 
            className="link-underline text-gray-300 hover:text-white text-lg font-light tracking-wide"
          >
            BLOG
          </a>
          <a 
            href="/board" 
            className="link-underline text-gray-300 hover:text-white text-lg font-light tracking-wide"
          >
            BOARD
          </a>
        </nav>

        {/* Main content section - centered */}
        <main className="flex flex-col items-start justify-center min-h-[calc(100vh-120px)] max-w-3xl mx-auto px-8">
          {/* Introduction text */}
          <div className="space-y-6 text-gray-200">
            <h1 className="text-5xl font-bolder md:text-6xl text-white mb-8" style={{ fontFamily: "'Spectral', serif" }}>
              Giovanni del Gallo
            </h1>
            
            <p className="text-xl md:text-xl font-light leading-relaxed">
              Co-founder @{' '}
              <a 
                href="https://glaut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-underline text-pink-400"
              >
                glaut.com
              </a>
              , writing my thoughts{' '}
              <a 
                href="https://blog.giova.io" 
                className="link-underline text-blue-400"
              >
                here
              </a>
            </p>

            <p className="text-xl md:text-xl font-light leading-relaxed">
              Gathering vibes{' '}
              <a 
                href="/board" 
                className="link-underline text-yellow-400"
              >
                here
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

