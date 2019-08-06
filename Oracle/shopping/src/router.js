import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import centern from './views/centern.vue'
import lead from './components/lead.vue'
import myself from './components/myself.vue'
import list from './components/list.vue'
import single from './components/single.vue'
import regin from './components/regin.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'centern',
      component: centern
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lead',
      name:'lead',
      component:lead,
    },
    {
      path:'/myself',
      name:'myself',
      component:myself,
    },
    {
      path:'/list',
      name:'list',
      component:list,
    },
    {
      path:'/single',
      name:'single',
      component:single
    },
    {
      path:'/regin',
      name:'regin',
      component:regin,
    }
  ]
})
