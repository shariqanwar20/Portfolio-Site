module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(30deg)' },
          "75%": { transform: 'rotate(-30deg)' },
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out',
       }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryBg: "#1f2235",
      secondaryBg: "#23263a",
      tertiaryBg: "#272b42",
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
