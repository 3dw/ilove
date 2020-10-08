import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
import './registerServiceWorker'

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
