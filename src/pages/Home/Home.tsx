import React from 'react'

const SOCIALS = [
  { href: 'https://x.com/giga_giova',                    label: 'X', viewBox: '1.254 2.25 21.492 19.5', width: 19.84,         d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://github.com/gigagiova',                label: 'GitHub', viewBox: '2 2 20 20', width: 18,    d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
  { href: 'https://www.linkedin.com/in/giovannidelgallo/', label: 'LinkedIn', viewBox: '0 0 24 24', width: 18, d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'mailto:giovanni@primeforesight.com', label: 'Email', viewBox: '0 0 24 18', width: 24, d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z' },
]

export function Home() {
  return (
    <div className="relative min-h-screen bg-[#191816] overflow-hidden">

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 pt-16 pb-36 md:px-16 lg:px-24">
        <div className="w-full max-w-xl">
          <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[#E8E4DF] font-normal italic tracking-[-0.03em]"
            style={{ fontFamily: "'Spectral', serif" }}>
            Hi, I’m Giovanni
          </h1>
          <div className="mt-8 space-y-6 text-[#B5AFA7] font-light leading-[1.8] text-[16px] md:text-[18px] max-w-xl">
            <p>
              I’m currently working on{' '}
              <a href="https://primeforesight.com" target="_blank" rel="noopener noreferrer" className="company-link story-link hover:text-[#C3B5D9]">
                <img src="/images/projects/prime-foresight-logo.svg" alt="" aria-hidden="true" className="company-logo prime-logo" />
                Prime Foresight
              </a>, a company developing the infrastructure to make AI superhuman at forecasting how technologies, companies and societies will evolve. Our ambition is to turn that foresight into the world’s best strategic decision maker.
            </p>
            <p>
              Before that, I co-founded{' '}
              <a href="https://glaut.com" target="_blank" rel="noopener noreferrer" className="company-link story-link hover:text-[#FF5491]">
                <img src="/images/projects/glaut-logo.svg" alt="" aria-hidden="true" className="company-logo" />
                Glaut
              </a>, where we used AI to conduct in-depth interviews at the scale of surveys, helping companies and political parties understand what people think and why. Before Glaut, I received a grant to drop out of university and start a company, which didn’t make it out of its infancy.
            </p>
            <p>
              I want to help lay the foundations of Civilization Engineering. I’m interested in what allows civilizations to keep advancing, what causes them to stagnate or collapse, and whether we can learn enough to influence which path we take.
            </p>
            <p>
              I want to use that understanding to improve humanity’s chances of becoming a civilization that reaches the stars and continues discovering the universe, rather than one that loses its capabilities and fades away.
            </p>
          </div>
        </div>
      </div>

      {/* Socials island */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-6 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
        {SOCIALS.map(({ href, label, d, viewBox, width }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="flex h-6 w-6 items-center justify-center text-[#6A645C] hover:text-[#E8E4DF] transition-colors duration-400" aria-label={label}>
            <svg width={width * 14 / 18} height="14" viewBox={viewBox} fill={label === 'Email' ? 'none' : 'currentColor'} aria-hidden="true">
              {label === 'Email' ? (
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="0.75" y="0.75" width="22.5" height="16.5" rx="2" />
                  <path d="M1.5 2.5 12 10 22.5 2.5" />
                </g>
              ) : <path d={d} />}
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
