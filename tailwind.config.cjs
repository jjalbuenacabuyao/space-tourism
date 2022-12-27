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
        "semi-transparent": "hsla(0, 0, 100%, 0.04)"
      },
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        "bellefair": ["Bellefair", "serif"]
      },
      backgroundImage: {
        "close": "url(./assets/images/shared/icon-close.svg)"
      }
    },
  },
  plugins: [],
}
