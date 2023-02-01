/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#ffc0cb'
        }
      }
    }
  },
  plugins: []
}
