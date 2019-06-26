import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import axios from 'axios'
import VueKonva from 'vue-konva'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$connectionString = 'http://200.16.7.177:8000'
Vue.use(ArgonDashboard)
Vue.use(Buefy)
Vue.use(VueKonva)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
