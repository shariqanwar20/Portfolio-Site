module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryBg: "#1f2235",
      secondaryBg: "#23263a",
      alternateText: "#ff4a57",
      secondaryText:"#dedebe",
      primaryText: "#ffffff"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
