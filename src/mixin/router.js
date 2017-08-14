import Vue from 'vue'
import Router from 'vue-router'
import Mixin from './components/mixin.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Mixin
    }
  ]
})
