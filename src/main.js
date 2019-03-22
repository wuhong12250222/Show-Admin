import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/main.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
