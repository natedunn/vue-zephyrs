// Below (maybe) fix: https://github.com/vuejs/vuepress/issues/1173
import pageComponents from '@internal/page-components'
import * as mylib from 'vue-zephyrs'
import './styles.css';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Below (maybe) fix: https://github.com/vuejs/vuepress/issues/1173
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
  Vue.use(mylib)
}