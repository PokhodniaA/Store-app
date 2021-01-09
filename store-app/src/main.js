import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/var.scss'
import './assets/scss/mixins.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
