const colors = {
  'primary': 'blue-500',
  'primaryHover': 'blue-600',
  'secondary': 'green-500',
  'secondaryHover': 'green-600'
}

const newElements = {
  Button: {
    // elements
    button: {
      variants: {
        size: {
          _default: 'py-2 px-3',
          sm: 'py-1 px-2',
          lg: 'py-3 px-4',
        },
        fill: {
          base: 'inline-block rounded',
          // sub-variants
          primary: {
            test: `fill-primary-test`,
            default: `bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white`,
            disabled: {
              default: 'test',
              click: `clicked-disabled`
            }
          },
          secondary: {
            default: `bg-green-500 hover:bg-green-600 focus:bg-green-600 text-white`,
            $click: `bg-green-700 focus:bg-green-600 text-white`,
          },
          _disabled: {
            default: `general-disabled bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`,
            $click: `clicked bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`
          },
          _loading: `bg-purple-300 hover:bg-purple-300 text-purple-500 cursor-not-allowed`,
        },
        outline: {
          base: 'button-outline',
          primary: {
            default: 'outline-primary-default',
            other: 'outline-primary-other'
          }
        }
      },
    }
  },
}

const elements = {
  Button: {
    'base': `inline-block py-2 px-3 rounded`,
    'variant': {
      'primary': {
        full: `bg-${colors.primary} hover:bg-${colors.primaryHover} focus:bg-${colors.primaryHover} text-white`,
        outline: `border border-${colors.primary} text-${colors.primary}`
      },
      'secondary': {
        'full': `bg-${colors.secondary} hover:bg-${colors.secondaryHover} focus:bg-${colors.secondaryHover} text-white`
      }
    },
    'state': {
      disabled: `bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`,
      loading: `cursor-wait`
    }
  },
  Input: {
    'base': 'appearance-none inline-block text-gray-700 border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:outline-none focus:shadow-outline',
  },
  Select: {
    select: {
      'base': 'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 cursor-pointer py-2 px-3 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline',
    }
  },
}

module.exports = {
  colors,
  elements,
  newElements,
  // components,
  // layouts,
}