import type { Config } from 'tailwindcss'


export default {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem',
        12.5: '3.125rem',
        25: '6.25rem',
        50: '12.5rem',
        75: '18.75rem',
        100: '25rem'
      },
      colors: {
        pink: {
          DEFAULT: '#ffc0cb'
        }
      }
    }
  },
  plugins: []
} satisfies Config
