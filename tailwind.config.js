/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headingText: 'Merriweather, serif',
        plainText: 'Rubik, sans-serif',
      },
      colors: {
        main: '#ffff',
        primary: '#40444d',
        secondary: '#d81f27',
        headingColor: '#181919',
        paragraphColor: '#1a1e1eb3',
        accent1: '#1a1e1e80',
        accent2: '#d81f271a',
        accent3: '#fefefecc',
      },
    },
  },
  plugins: [],
};
