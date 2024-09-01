/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#45B7D1",
        'mint-green': '#c5e0d8',
        'light-blue': '#b8d8e8',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        handwriting: ['Dancing Script', 'cursive'],
        newFont: ['TenFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
