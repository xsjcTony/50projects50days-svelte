/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem',
        12.5: '3.125rem',
        25: '6.25rem',
        50: '12.5rem'
      },
      colors: {
        pink: {
          DEFAULT: '#ffc0cb'
        }
      }
    }
  },
  plugins: []
}
