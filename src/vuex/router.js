import Vue from 'vue'
import Router from 'vue-router'
import VuexComponent from './components/vuex-component'
import VuexComponent2 from './components/vuex-component2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuex-learn',
      component: VuexComponent
    },
    {
      path: '/vuex2',
      name: 'vuex-learn2',
      component: VuexComponent2
    }
  ]
})
