/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        "clr-dark": "#0B0D17",
        "off-white": "#D0D6F9",
      },
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        "bellefair": ["Bellefair", "serif"]
      },
      fontSize: {
        "fs-15": "0.9375rem",
        "heading": "clamp(1rem, 0.74rem + 1.13vw, 1.75rem)",
        "highlight": "clamp(5rem, 0.83rem + 17.81vw, 9.375rem)",
        "planet-name": "clamp(3.5rem, 2.53rem + 4.13vw, 6.25rem)"
      },
      backgroundImage: {
        "close": "url('./assets/images/shared/icon-close.svg')",
        "hamburger": "url('./assets/images/shared/icon-hamburger.svg')",
        "home-mobile": "url('./assets/images/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/images/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/images/home/background-home-desktop.jpg')",
        "dest-desktop": "url('./assets/images/destination/background-destination-desktop.jpg')",
        "dest-mobile": "url('./assets/images/destination/background-destination-mobile.jpg')",
        "dest-tablet": "url('./assets/images/destination/background-destination-tablet.jpg')"
      },
      padding: {
        "responsive": "clamp(1.5rem, 0.82rem + 2.91vw, 3.4375rem)",
        "hero": "clamp(1.5rem, -6.61rem + 34.61vw, 10rem)",
        "btn-py-m": "clamp(4.25rem, 3.48rem + 3.29vw, 6.4375rem)",
        "btn-px-m": "clamp(1.875rem, 1.52rem + 1.5vw, 2.875rem)",
        "btn-px-md": "clamp(2.875rem, 2.52rem + 1.5vw, 3.875rem)",
        "btn-py-md": "clamp(6.4375rem, 6.08rem + 1.5vw, 7.4375rem)",
        "hero-home-pb": "clamp(3rem, 1.2rem + 7.7vw, 8.125rem)",
      },
      width: {
        "img-responsive" : "clamp(10.625rem, 4.57rem + 25.82vw, 27.8125rem)",
      },
    },
  },
  plugins: [],
}
