module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '7/1': '70vh',
        'fit': 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
