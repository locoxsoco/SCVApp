import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
Vue.use(Buefy)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
