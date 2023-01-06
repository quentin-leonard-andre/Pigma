/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#BCD4E6',
          200: '#A6C6DE',
          300: '#90B8D6',
          400: '#7BAACE',
          500: '#659CC6',
          600: '#4F8EBE',
          700: '#417FAE',
          800: '#386F99',
          900: '#305F83',
        },
        'success': {
          100: '#BCE6C6',
          200: '#A6DEB3',
          300: '#90D6A1',
          400: '#7BCE8E',
          500: '#65C67B',
          600: '#4FBE69',
          700: '#41AE5A',
          800: '#38994F',
          900: '#308344',
        },
      },
    },
  },
  plugins: [],
}
