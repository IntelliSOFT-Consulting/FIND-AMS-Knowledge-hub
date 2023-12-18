/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      roboto: ['"Roboto", sans-serif']
    },
    extend: {
      colors: {
        info: "#1d5288",
        lightInfo: "#0ea5e9",
        smoke: "#E3EEF7",
        success: "#16a34a"
      }
    },
  },
  plugins: [],
}

