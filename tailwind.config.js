/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#181818',
        accent: '#1db954',
        surface: '#282828',
        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
          muted: '#535353'
        }
      }
    },
  },
  plugins: [],
}