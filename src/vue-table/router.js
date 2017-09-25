import Vue from 'vue'
import Router from 'vue-router'
import VueTable from './test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueTable',
      component: VueTable
    },
  ]
})
