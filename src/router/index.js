import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => require(['@/components/homepage.vue'], resolve)
    },
    {
      path: '/search/:routertext',
      name: 'search',
      component: resolve => require(['@/components/search.vue'], resolve)
    }]
})
