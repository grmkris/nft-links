module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
        '4xl': '2400px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')]
}
