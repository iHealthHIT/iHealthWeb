import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [
  {
    path: '/',
    redirect: '/verify'
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/verify',
    name: 'homepage',
    component: resolve => require(['@/components/form.vue'], resolve)
  },
  {
    path: '/homepage/:sid',
    component: resolve => require(['@/components/homepage.vue'], resolve),
    children: [
      {
        path: 'chart',
        name: 'home',
        component: resolve => require(['@/components/chart.vue'], resolve)
      }
    ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: resolve => require(['@/components/NotFound.vue'], resolve)
  }
]

export default new Router({
  routes
})
