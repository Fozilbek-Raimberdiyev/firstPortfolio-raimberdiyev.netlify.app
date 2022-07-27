import Vue from 'vue'
import App from './App.vue'
import router from "../src/routes/index"
import store from "../src/store/index"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
