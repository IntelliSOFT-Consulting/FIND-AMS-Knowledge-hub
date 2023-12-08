/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
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
  plugins: [
    require('flowbite/plugin')
  ]
}

