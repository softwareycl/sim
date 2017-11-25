// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/global.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router,
//   template: '<App/>',
//   components: { App }
// })
