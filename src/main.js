import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
import './registerServiceWorker'
import VueGtag from 'vue-gtag'

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-FWC2WSJYJ9" }
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
