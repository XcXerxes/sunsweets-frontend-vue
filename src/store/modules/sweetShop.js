import * as types from '../mutation-types'
// import api from '@/api'
// state

const state = {
  currentCity: 'all', // 当前城市
  currentArea: 'all', // 当前地区
  currentMonetary: 'all', // 当前的消费
  currentSort: 'createdAt',      // 排序
  data: {},             // fetch 数据
  loading: false       // loading
}

// getters
const getters = {
  currentShopCity: state => state.currentCity,
  currentShopArea: state => state.currentArea,
  currentMonetary: state => state.currentMonetary,
  currentShopSort: state => state.currentSort,
  sweetShopList: state => state.data.data,
  sweetShopTotal: state => state.data.total,
  sweetShopLoading: state => state.loading
}

// actions
const actions = {
  fetchSweetShopData ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      commit(types.SWEET_SHOP_LIST_REQUEST)
    })
  }
}

// mutations
const mutations = {
  [types.SWEET_SHOP_LIST_REQUEST] (state) {
    state.loading = true
  },
  [types.SWEET_SHOP_LIST_RECEIVE] (state, {data}) {
    state.loading = false
    state.data = Object.assign({}, data)
  },
  [types.SWEET_SHOW_LIST_FAIL] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
