import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes'
import {dollarFilter, percentFilter} from "./filters.js"

Vue.filter("dollar",dollarFilter)
Vue.filter("percent",percentFilter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
