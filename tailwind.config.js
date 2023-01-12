/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primaryGradient: 'linear-gradient(100deg, #b31217 -0.79%, #e52d27 105%);',
      descriptionColor: '#494949',
      lightBlack: '#696969',
    },
    fontSize: {
      h1: ['2rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h1-sm': ['2.5rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h1-md': ['3.5rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h1-lg': ['4rem', { lineHeight: 1.2, fontWeight: '800' }],

      h2: ['1.7rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h2-sm': ['2rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h2-md': ['2.5rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h2-lg': ['3rem', { lineHeight: 1.2, fontWeight: '800' }],

      h3: ['1.3rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h3-sm': ['1.5rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h3-md': ['1.8rem', { lineHeight: 1.2, fontWeight: '800' }],
      'h3-lg': ['2.2rem', { lineHeight: 1.2, fontWeight: '800' }],

      h4: ['1.2rem', { lineHeight: 1.2, fontWeight: 700 }],
      'h4-sm': ['1.3rem', { lineHeight: 1.2, fontWeight: 700 }],
      'h4-md': ['1.4rem', { lineHeight: 1.2, fontWeight: 700 }],
      'h4-lg': ['1.6rem', { lineHeight: 1.2, fontWeight: 700 }],

      h5: ['1.15rem', { lineHeight: 1.2, fontWeight: '700' }],
      'h5-sm': ['1.2rem', { lineHeight: 1.2, fontWeight: '700' }],
      'h5-md': ['1.3rem', { lineHeight: 1.2, fontWeight: '700' }],
      'h5-lg': ['1.4rem', { lineHeight: 1.2, fontWeight: '700' }],

      h6: '1rem',
      xs: '12px',
      md: '16px',
    },
  },
  plugins: [],
};
