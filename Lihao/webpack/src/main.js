import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$http= axios
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
new Vue({
  render: h => h(App),
}).$mount('#app')
