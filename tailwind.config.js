/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Custom font families - uncomment the one you want to use
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']            // Clean & modern (recommended)
        // sans: ['Space Grotesk', 'system-ui', 'sans-serif']  // Geometric & quirky
        // sans: ['DM Sans', 'system-ui', 'sans-serif']        // Elegant & balanced
        // sans: ['Outfit', 'system-ui', 'sans-serif']         // Modern geometric
        // sans: ['Manrope', 'system-ui', 'sans-serif']        // Rounded & friendly
      }
    }
  },
  plugins: []
}

