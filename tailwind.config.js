module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: { // defaults to {}
    'none': 'none',
    'grayscale': 'grayscale(1)',
    'invert': 'invert(1)',
    'sepia': 'sepia(1)',
  },
  backdropFilter: { // defaults to {}
    'none': 'none',
    'blur': 'blur(20px)',
  },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', "sans-serif"],
        merriweather: ['Merriweather', "sans-serif"],
      },
      animation: {
        "fade-in-fwd": "fade-in-fwd 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s   both"
    },
    keyframes: {
        "fade-in-fwd": {
            "0%": {
                transform: "translateZ(-80px)",
                opacity: "0"
            },
            to: {
                transform: "translateZ(0)",
                opacity: "1"
            }
        }
    },
    },
  },
  variants: {
    animation: ['hover', 'focus'],
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {},
    'shadowOutline': ['focus']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-shadow-outline-colors')(),
    require('tailwindcss-filters'),
    require('tailwindcss-shadow-outline-colors')(),
  ],
}
