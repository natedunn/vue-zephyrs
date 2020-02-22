const { resolve } = require('path')

module.exports = {
  base: '/',
  title: 'Vue Zephyrs',
  description: 'A beautiful, accessible, standardized UI library for Vue & Tailwind... someday soon.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/natedunn/vue-zephyrs' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/about',
          'introduction/guide',
          'introduction/tips',
        ]
      },
      {
        title: 'Elements',
        collapsable: false,
        children: [
          'elements/ZButton',
          'elements/ZInput',
          'elements/ZSelect',
        ]
      }
    ]
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("tailwind.config.js"),
      require("postcss-preset-env")
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue-zephyrs': resolve(__dirname, '../../src')
      }
    },
  }
}