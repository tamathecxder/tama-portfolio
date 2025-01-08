/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        fullgray: '#999999',
        subtlegray: '#D8D8D8',
        lightgray: '#6D6D6D',
        read: '#1f2937',
      }
    },
  },
  plugins: [],
}