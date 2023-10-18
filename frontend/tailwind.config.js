/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '325px'
      },
      colors: {
        'soft-orange' : 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'vdark-blue': 'hsl(240, 100%, 5%)',
        'off-white': 'hsl(36, 100%, 99%)'

      }
    },
  },
  plugins: [],
}

