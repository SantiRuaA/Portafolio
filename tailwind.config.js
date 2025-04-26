/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#1a1a2e',
        neon: '#08fdd8',
        pinkneon: '#ff4c94',
        verdeNeon: '#00ff7f',
        azulNeon: '#00bcd4', 
        grisMetal: '#c0c0c0',
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [],
}

