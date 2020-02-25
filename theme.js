export const config = {
  colors: {
    'primary': 'bg-blue-500',
    'primaryHover': 'bg-blue-600',
    'secondary': 'bg-green-500',
    'secondaryHover': 'bg-green-600',
  }
}

export const ZButton = {
  'base': `inline-block py-2 px-3 rounded `,
  'variant': {
    'primary': `${config.colors.primary} hover:${config.colors.primaryHover} focus:${config.colors.primaryHover} text-white`,
    'secondary': `${config.colors.secondary} hover:${config.colors.secondaryHover} focus:${config.colors.secondaryHover} text-white`
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
