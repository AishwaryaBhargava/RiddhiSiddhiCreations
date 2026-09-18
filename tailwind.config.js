/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Palette sampled from the logo (src/assets/icons/new_latest_logo.jpeg)
      colors: {
        wine: {
          DEFAULT: '#520A24', // wordmark burgundy: headings, dark bands
          900: '#2E0412',
          800: '#3E0818',
          700: '#520A24',
          600: '#6A1030',
          500: '#8A1E44',
          100: '#F7E3EA',
        },
        rose: {
          DEFAULT: '#E98BA8', // petal pink: fills, glows, ornament
          600: '#B8335F',     // text on cream (5.3:1)
          700: '#9C2A4F',
          300: '#F5B6C8',
          100: '#FBE1E8',
        },
        marigold: {
          DEFAULT: '#E1B458', // gold: buttons, borders, beads, stars
          600: '#C4942F',
          300: '#F3D48A',
          100: '#FBF0D2',
        },
        sage: {
          DEFAULT: '#7E8240', // olive leaf green from the logo: beads, chips, soft surfaces
          700: '#5C6020',
          600: '#6C7030',
          300: '#B8BA86',
          100: '#E9EAD6',
          50: '#F4F5EA',
        },
        cream: {
          DEFAULT: '#FAF6EA', // the logo's own ground
          200: '#F4E9DC',
          300: '#EAD8C6',
        },
        blush: {
          DEFAULT: '#FBE6DC', // the logo's watercolour edge: navbar and footer
          200: '#F8D8D6',
        },
        henna: {
          DEFAULT: '#6B3A1E', // body ink on cream
          700: '#4E2A15',
          400: '#9A6A45',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
