import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJS from 'vue-typed-js'

Vue.config.productionTip = false

Vue.use(VueTypedJS)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
