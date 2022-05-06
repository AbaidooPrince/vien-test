module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        vien: {
        primary: '#016450',
        secondary: '#FF8433',
        white: '#FDFDFD',
        gray: '#9EA0A5'
        }
      }
    },
  },
  plugins: [],
}
