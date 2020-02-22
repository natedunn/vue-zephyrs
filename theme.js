export const config = {
  colors: {
    'primary': 'bg-blue-500',
  }
}

export const ZButton = {
  'base': 'inline-block py-2 px-3 rounded',
  'variant': {
    'primary': `${config.colors.primary} text-white`
  },
  'state': {
    'disabled': `bg-gray-300 text-gray-500 cursor-not-allowed`
  }
}

export const ZInput = {
  'base': 'appearance-none inline-block text-gray-700 border-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500',
}
