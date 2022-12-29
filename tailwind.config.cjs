/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-dark": "hsl(230, 35, 7%)",
        "off-white": "#D0D6F9",
        "semi-transparent": "hsla(0, 0, 100%, 0.04)"
      },
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        "bellefair": ["Bellefair", "serif"]
      },
      fontSize: {
        "fs-15": "0.9375rem",
      },
      backgroundImage: {
        "close": "url('./assets/images/shared/icon-close.svg')",
        "hamburger": "url('./assets/images/shared/icon-hamburger.svg')",
        "home-mobile": "url('./assets/images/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/images/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/images/home/background-home-desktop.jpg')"
      },
      padding: {
        "responsive": "clamp(1.5rem, 0.82rem + 2.91vw, 3.4375rem)",
        "home-hero": "clamp(1.5rem, -6.61rem + 34.61vw, 10rem)"
      }
    },
  },
  plugins: [],
}
