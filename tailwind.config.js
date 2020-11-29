const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        jb: {
          green: '#0ec785',
          purple: '#3c2bac'
        },
        muted: 'hsl(197, 33%, 97%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
