import Vue from 'vue'
import App from './App.vue'
// import index from './views/index.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import changebig from 'vue2.0-zoom';


Vue.config.productionTip = false
Vue.use(changebig);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
