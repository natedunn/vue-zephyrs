const { resolve } = require('path')

module.exports = {
  base: '/',
  title: 'Vue Zephyrs',
  description: 'The best Vue component library for Tailwind CSS users.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Github', link: 'https://github.com/wuruoyun/vue-component-lib-starter' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/button',
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue-zephyrs': resolve(__dirname, '../../src')
      }
    }
  }
}