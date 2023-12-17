/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        consolata:['Inconsolata, monospace'],
        notoSans:['Noto Sans Symbols, sans-serif']
      },
    },
  },
  plugins: [],
}

