import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {$axios} from './plugins/axios'

// Importing style
require('@/assets/scss/main.scss')

// Adding axios to vue instance
Vue.prototype.$axios = $axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
