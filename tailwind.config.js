/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['"Roboto", sans-serif']
    },
    extend: {
      colors: {
        info: "#1d5288"
      }
    },
  },
  plugins: [],
}

