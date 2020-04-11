import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes'
import { VueSpinners } from '@saeris/vue-spinners'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import {dollarFilter, percentFilter} from "./filters.js"

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.filter("dollar",dollarFilter)
Vue.filter("percent",percentFilter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
