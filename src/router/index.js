import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'homepage',
    component: resolve => require(['@/components/homepage.vue'], resolve)
  },
  {
    path: '/s',
    name: 'verify',
    component: resolve => require(['@/components/search.vue'], resolve)
  }
]

export default new Router({
  routes
})
