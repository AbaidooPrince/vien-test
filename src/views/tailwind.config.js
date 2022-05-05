module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    borderRadius: {
    'large': '140px'
    },
    extend: {
      colors: {
        hepeps: {
          primary: '#dedede',
          secondary: '#F20505',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
