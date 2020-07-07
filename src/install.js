import Vue from 'vue';
import VueFeather from 'vue-feather';
import Theme from '../z.theme.js';
import * as elements from './elements'
import * as components from './components'
import * as Utils from './utils'

const install = (Vue, options = {}) => {
  for (let key in elements) {
    let _key = options.prefix ? options.prefix + key : key
    Vue.component(_key, elements[key])
  }
  for (let key in components) {
    let _key = options.prefix ? options.prefix + key : key
    Vue.component(_key, components[key])
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Vue.use({
  install () {
    Vue.helpers = Utils;
    Vue.prototype.$utils = Utils;
    Vue.prototype.$theme = Theme;
  }
});

Vue.use(VueFeather);

export { install }
