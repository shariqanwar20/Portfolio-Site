module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-180deg)' },
          '50%': { transform: 'rotate(180deg)' },
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
       }
    },
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
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
