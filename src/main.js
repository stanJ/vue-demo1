// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import ElementUI from 'element-ui'
//import '@/assets/theme/index.css'
import App from './App'
import router from './router'
//import './lib/sui/sui.css'
//import './lib/sui/sui-append.css'
//import './assets/css/frame.css'
Vue.config.productionTip = false
//Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
