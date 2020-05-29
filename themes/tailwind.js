const components = {
  ZButton: {
    // elements
    button: {
      _base: 'inline-flex items-center border-2 justify-center rounded-l-md rounded-r-md leading-6 font-bold focus:outline-none',
      status: {
        _base: 'border-transparent',
        loading: 'bg-cool-gray-200 hover:bg-cool-gray-200 text-cool-gray-500 cursor-wait',
        disabled: 'bg-gray-200 hover:bg-gray-200 text-gray-400 cursor-not-allowed',
      },
      variant: {
        fill: {
          _base: 'border-transparent',
          _default: 'text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:shadow-outline active:bg-blue-500',
          primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:shadow-outline active:bg-blue-700',
          secondary: 'text-white bg-green-400 hover:bg-green-500 focus:bg-green-500 focus:shadow-outline-green active:bg-green-600',
          disabled: 'bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed',
        },
        outline: {
          _default: "border-blue-500 text-blue-500 hover:bg-blue-100 focus:bg-blue-100 focus:shadow-outline active:border-blue-600 active:text-blue-800",
          primary: "border-blue-500 text-blue-500 hover:bg-blue-100 focus:bg-blue-100 focus:shadow-outline active:border-blue-600 active:text-blue-800",
          secondary: "border-green-500 text-green-500 hover:bg-green-100 focus:bg-green-100 focus:shadow-outline-green active:border-green-600 active:text-green-800"
        },
        a11y: {
          primary: 'text-white bg-blue-500 border-blue-800 focus:shadow-outline hover:bg-blue-700 hover:border-blue-800 focus:border-blue-500 focus:bg-blue-700 active:border-blue-800 active:bg-blue-800'
        }
      },
      size: {
        _default: 'text-base py-2 px-3', // same as 'md'
        xs: 'text-xs px-1',
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4',
      },
    }
  },
  ZInput: {
    label: {
      _default: '',
    },
    input: {
      _default: 'appearance-none inline-block text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:outline-none focus:shadow-outline'
    }
  },
  ZPanel: {
    panel: {
      size: {
        _default: 'py-4 px-4',
        none: '',
        xs: 'px-1',
        sm: 'py-2 px-4',
        md: 'py-5 px-5',
        lg: 'py-8 px-8',
      },
      variant: {
        _base: 'rounded-t-md rounded-b-md overflow-hidden',
        _default: 'border',
        header: "font-bold border-b flex items-center justify-between",
        footer: "border-t flex flex-col md:flex-row md:items-center md:justify-between",
        shadow: "shadow-lg",
        border: "border",
        well: "bg-gray-100",
      }
    },
  },
  ZSelect: {
    select: {
      _default: "block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 cursor-pointer py-2 px-3 pr-6 rounded leading-tight focus:outline-none focus:shadow-outline"
    }
  },
  Spinner: {
    spinner: {
      variant: {
        _default: 'pointer-events-none h-4 w-4 border-2 border-solid border-transparent'
      }
    }
  }
}

module.exports = {
  components
}