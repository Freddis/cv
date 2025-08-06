import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
     tailwindcss(),
  ]
}
