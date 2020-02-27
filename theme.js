export const config = {
  colors: {
    'primary': 'blue-500',
    'primaryHover': 'blue-600',
    'secondary': 'green-500',
    'secondaryHover': 'green-600',
  },
}

// Format
export const ZComponent = {
  // If element has multiple elements, name element here. Otherwise, remove.
  element: {
    // Always here
    base: '',
    // These are auto-read per component
    'variant': {
      'primary': {
        'outline': '',
        'filled': '',
      },
      'custom': ''
    },
    // State
    'state': {
      'disabled': '',
      'error': ''
    }
  },
  otherElement: {}
}

export const ZButton = {
  'base': `inline-block py-2 px-3 rounded `,
  'variant': {
    'primary': {
      'full': `bg-${config.colors.primary} hover:bg-${config.colors.primaryHover} focus:bg-${config.colors.primaryHover} text-white`,
      'outline': `border border-${config.colors.primary} text-${config.colors.primary}`,
    },
    'secondary': {
      'full': `bg-${config.colors.secondary} hover:bg-${config.colors.secondaryHover} focus:bg-${config.colors.secondaryHover} text-white`
    }
  },
  'state': {
    'disabled': `bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed`,
  }
}

export const ZH = {
  base: 'font-bold',
  'variant': {
    'h1': 'text-5xl',
    'h2': 'text-4xl',
    'h3': 'text-3xl',
    'h4': 'text-2xl',
    'h5': 'text-xl',
    'h6': 'text-lg',
  }
}

export const ZInput = {
  'base': 'appearance-none inline-block text-gray-700 border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:outline-none focus:shadow-outline',
}

export const ZSelect = {
  select: {
    'base': 'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 cursor-pointer py-2 px-3 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline',
  }
}
