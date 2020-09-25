import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'

import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
