const { resolve } = require('path')

module.exports = {
  title: "Vue Zephyrs",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Vue Zephyrs',
      description: 'A simple, accessible, and themeable UI library. Built with Tailwind. Edited by you.',
      sidebar: [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            {
              title: 'About',
              path: 'introduction/about/'
            },
            {
              title: 'Install',
              path: 'introduction/install'
            },
            {
              title: 'Theme',
              path: 'introduction/theme'
            },
            {
              title: 'Roadmap',
              path: 'introduction/roadmap'
            },
          ]
        },
        {
          title: 'Elements',
          collapsable: false,
          children: [
            'elements/ZButton',
            'elements/ZInput',
            'elements/ZCheckbox',
            'elements/ZSelect',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/ZPanel',
          ]
        }
      ]
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue Zephyrs',
      description: 'Vue组件库'
    },
    '/es/': {
      lang: 'zh-MX',
      title: 'Vue Zephyrs',
      description: 'El mejor framework para Vue.'
    }
  },
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
          'introduction/install',
          'introduction/theme',
          'introduction/roadmap',
        ]
      },
      {
        title: 'Elements',
        collapsable: false,
        children: [
          'elements/ZButton',
          'elements/ZInput',
          'elements/ZCheckbox',
          'elements/ZSelect',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/ZPanel',
        ]
      }
    ]
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '',
        indexSuffix: '',
        notFoundPath: '/404.html',
      },
    ],
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("tailwind.config.js"),
      require("postcss-preset-env")({
        features: {
          'focus-within-pseudo-class': false
        }
      })
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