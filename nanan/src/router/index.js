import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import aboutus from '@/components/page/aboutus'
import persionalgo from '@/components/page/persionalgo'
import registered from '@/components/page/registered'
import landed from '@/components/page/landed'
import update from '@/components/page/update'
import policies from '@/components/pages/policies'
import policy from '@/components/pages/policy'
import activities from '@/components/pages/activities'
import activity from '@/components/pages/activity'
import olders from '@/components/pages/olders'
import volunteers from '@/components/pages/volunteers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: aboutus
    },
    {
      path:'/persionalgo',
      name:'persionalgo',
      component: persionalgo
    },
    {
      path:'/registered',
      name:'registered',
      component:registered
    },
    {
      path:'/landed',
      name:'landed',
      component:landed
    },
    {
      path:'/update',
      name:'update',
      component:update
    },
    {
      path: '/policies',
      name: 'policies',
      component: policies
    },{
      path: '/policy/:id',
      name: 'policy',
      component: policy
    },{
      path: '/activities',
      name: 'activities',
      component: activities
    },{
      path: '/activity/:id',
      name: 'activity',
      component: activity
    },{
      path: '/olders',
      name: 'olders',
      component: olders
    },{
      path: '/volunteers',
      name: 'volunteers',
      component: volunteers
    }
  ]
})
