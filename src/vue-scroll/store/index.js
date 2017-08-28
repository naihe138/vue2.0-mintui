import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
// car
import car from './modules/car'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters,
  actions,
  mutations: {
    add (state, n) {
      state.count = n
    }
  },
  modules: {
    car
  }
})
