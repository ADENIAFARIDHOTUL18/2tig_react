/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#22c55e', // Hijau (Green 500)
      dark: '#1a202c',
    },
  },
},
  plugins: [],
}