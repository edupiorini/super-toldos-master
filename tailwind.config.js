/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./tipos.ts",
    "./components/**/*.{ts,tsx}",
    "./services/**/*.{ts,tsx,js,jsx}",
    "./dados/**/*.{ts,tsx}",
    "./*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#991B1B', // Deep, sophisticated red (not bright open red)
          redHover: '#7F1D1D',
          redLight: '#F87171', // texto vermelho sobre fundo escuro (contraste AA)
          black: '#171717',
          gray: '#F5F5F4',
        }
      }
    }
  },
  plugins: [],
}
