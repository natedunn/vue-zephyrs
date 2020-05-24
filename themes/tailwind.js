const elements = {
  Button: {
    // elements
    button: {
      _base: 'inline-flex items-center border-2 justify-center rounded-l-md rounded-r-md leading-6 font-bold focus:shadow-outline focus:outline-none',
      status: {
        loading: 'bg-gray-300 hover:bg-gray-300 text-gray-600 cursor-wait',
        disabled: 'bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed',
      },
      variant: {
        fill: {
          _base: 'border-transparent',
          _default: 'text-white hover:bg-blue-600 focus:bg-blue-600 bg-blue-500 active:bg-blue-500', // same as 'primary'
          primary: 'text-white bg-blue-500 dark:bg-red-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-500',
          secondary: 'text-white hover:bg-green-600 focus:bg-green-600 bg-green-500 active:bg-green-700',
          disabled: 'bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed',
        },
        outline: {
          _default: 'border-blue-500 text-blue-500 hover:bg-blue-100 active:bg-blue-200 active:border-blue-600 active:text-blue-800', // same as 'primary'
          primary: 'border-blue-500 text-blue-500 hover:bg-blue-100 active:bg-blue-200 active:border-blue-600 active:text-blue-800',
          secondary: 'border-green-500 text-green-500 hover:bg-green-100 active:bg-green-200 active:border-green-600 active:text-green-600'
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
  Panel: {
    // wrapper: {
    //   _default: "shadow-md border rounded-md",
    //   shadow: "shadow-md",
    //   outline: "border",
    //   well: "bg-gray-100"
    // },
    // header: {
    //   _default: 'font-bold py-4 px-4 border-b flex items-center justify-between'
    // },
    // body: {
    //   _default: 'py-4 px-4'
    // },
    // footer: {
    //   _default: 'py-4 px-4 border-t flex items-center justify-between'
    // }
    panel: {
      _default: "py-4 px-4 border rounded-md",
      wrapper: "border rounded-md overflow-hidden",
      header: "font-bold py-4 px-4 border-b flex items-center justify-between",
      body: "py-4 px-4",
      footer: "py-4 px-4 border-t flex items-center justify-between",
      shadow: "shadow-lg",
      outline: "border",
      well: "bg-gray-100",
    }
  }
}

const components = {
  Spinner: {
    spinner: {}
  }
}

module.exports = {
  elements,
  components,
  // layouts,
}