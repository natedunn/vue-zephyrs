module.exports = {
  purge: false,
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'responsive', 'hover', 'focus', 'active'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-dark-mode')(),
  ],
}
