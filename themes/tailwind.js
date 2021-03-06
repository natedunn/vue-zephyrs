const components = {
  ZButton: {
    // elements
    button: {
      _base: 'inline-flex items-center border-2 justify-center rounded-l-md rounded-r-md font-bold leading-6 focus:outline-none',
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
        sm: 'text-sm py-1 px-3',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4',
      },
    }
  },
  ZCheckbox: {
    wrapper: {
      variant: {
        _base: 'leading-6 rounded inline-flex items-center cursor-pointer',
        _default: 'border-2 border-cool-gray-100 bg-cool-gray-100 hover:border-cool-gray-200 hover:bg-cool-gray-200',
        secondary: 'border-2 border-green-50 bg-green-50 hover:border-green-100 hover:bg-green-100'
      },
      size: {
        _default: 'text-base py-2 px-3',
        sm: 'text-sm font-medium py-1 px-3',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4'
      }
    },
    input: {
      _default: 'mr-2 cursor-pointer',
      size: {
        _default: '',
        sm: 'h-3 w-3',
        md: '',
        lg: 'h-4 w-4'
      }
    },
    label: "block pointer-events-none cursor-pointer"
  },
  ZInput: {
    wrapper: {
      _default: 'focus-within:z-10'
    },
    label: {
      _default: 'block mb-2 text-sm font-bold text-gray-900',
    },
    input: {
      status: {
        _default: 'focus:z-0 focus:outline-none focus:bg-white focus:border-blue-500 focus:outline-none focus:shadow-outline',
        disabled: 'bg-gray-100 cursor-not-allowed'
      },
      variant: {
        _base: 'appearance-none inline-flex text-gray-700 leading-6 border-t-2 border-r-2 border-b-2 border-l-2 border-gray-300',
        _default: 'rounded-l rounded-r',
        rounded: 'rounded-l-full rounded-r-full'
      },
      size: {
        _default: 'text-base py-2 px-3',
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-3',
        lg: 'text-lg py-3 px-4',
        rounded: {
          _default: 'text-base py-2 px-4',
          sm: 'text-sm font-semibold py-1 px-3',
          md: 'text-base py-2 px-4',
          lg: 'text-lg py-3 px-5',
        }
      }
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
    wrapper: "inline-block focus-within:z-10",
    label: "block pb-2 text-sm font-bold text-gray-900",
    selectWrapper: "inline-block relative",
    select: {
      status: {
        _default: 'hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:border-blue-500 focus:shadow-outline',
        disabled: 'bg-gray-100 cursor-not-allowed'
      },
      _base: "cursor-pointer",
      _default: "appearance-none inline-flex text-gray-700 leading-6 border-t-2 border-r-2 border-b-2 border-l-2 border-gray-300 rounded-l rounded-r",
      size: {
        _default: 'text-base py-2 pl-2 pr-8',
        sm: 'text-sm font-medium py-1 pl-1 pr-6',
        md: 'text-base py-2 pl-2 pr-8',
        lg: 'text-lg py-3 pl-3 pr-10',
      }
    },
    iconWrapper: {
      _default: "pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700",
      size: {
        _default: 'px-2',
        sm: 'px-2',
        md: 'px-2',
        lg: 'px-3'
      }
    }
  },
  Spinner: {
    spinner: {
      variant: {
        _default: 'pointer-events-none h-4 w-4 border-2 border-solid border-transparent'
      }
    }
  },
}

module.exports = {
  components
}