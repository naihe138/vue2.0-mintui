// 购物车模块
import * as types from '../mutations-type'
// state
const state = {
  shopCar: []
}
// getters
const getters = {
  shopCar: state => state.shopCar
}

// actions
const actions = {
  addShop ({commit, state}, products) {
    commit(types.ADD_SHOP, products)
  },
  // 异步删除产品
  deleShop ({commit, state}, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const arr = state.shopCar.filter(item => item.id !== id)
        commit(types.DELE_SHOP, arr)
        resolve(arr)
      }, 1000)
    })
  }
  // 让然也可以用 async 的方法
}
// mutations
const mutations = {
  [types.ADD_SHOP] (state, product) {
    state.shopCar.push(product)
  },
  [types.DELE_SHOP] (state, arr) {
    state.shopCar = arr
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
