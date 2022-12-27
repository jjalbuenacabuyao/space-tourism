/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-dark": "hsl(230°, 35%, 7%)",
        "off-white": "hsl(231°, 77%, 90%)",
      }
    },
  },
  plugins: [],
}
