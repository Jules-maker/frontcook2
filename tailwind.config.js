/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      yellow: {
        500: '#FFEA29'
      },
      green: {
        200: '#BBF7D0',
        500: '#06AB78',
        700: '#00724E',
      },
      blue: {
        800: '#012635'
      },
      transparent: "transparent"
    },
    extend: {},
  },
  plugins: [],
}