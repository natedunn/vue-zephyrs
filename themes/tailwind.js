const colors = {
  'primary': 'blue-500',
  'primaryHover': 'blue-600',
  'secondary': 'green-500',
  'secondaryHover': 'green-600'
}

const elements = {
  Button: {
    // elements
    button: {
      size: {
        _default: 'text-base py-2 px-3',
        sm: 'py-1 px-2',
        lg: 'py-3 px-4',
      },
      fill: {
        _base: 'inline-block rounded-l-md rounded-r-md font-bold focus:outline-none focus:shadow-outline focus:border-blue-300',
        // sub-variants
        primary: {
          _base: `flex items-center justify-center border border-transparent leading-6 text-white`,
          _default: `hover:bg-blue-600 focus:bg-blue-600 bg-blue-500 active:bg-blue-500`,
          // $click: `bg-blue-500`,
        },
        secondary: {
          _base: `flex items-center justify-center border border-transparent leading-6 font-medium text-white`,
          _default: `hover:bg-green-600 focus:bg-green-600 bg-green-500`,
          $click: `bg-green-500`,
        },
        disabled: {
          _default: `bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`,
          $click: `bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`
        },
      },
      outline: {
        base: 'button-outline',
        primary: {
          default: 'outline-primary-default',
          other: 'outline-primary-other'
        }
      }
    }
  },
  Card: {
    wrap: {},
    header: {},
    body: {},
    footer: {}
  }
}

module.exports = {
  colors,
  elements,
  // components,
  // layouts,
}