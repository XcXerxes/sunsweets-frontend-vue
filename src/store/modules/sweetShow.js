import api from '@/api'
import * as types from '../mutation-types'

const state = {
  currentCity: 'all', // 当前的城市
  currentCate: 'all', // 当前的分类
  currentSort: 'id', // 当前的排序
  data: {},        // sweet show 列表
  loading: false   // 加载
}

const getters = {
  sweetShowList: state => state.data.data,
  sweetShowTotal: state => state.data.total,
  show_loading: state => state.loading,
  currentCity: state => state.currentCity,
  currentCate: state => state.currentCate,
  currentSort: state => state.currentSort
}

const actions = {
  fetchSweetShowList ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      commit(types.SWEET_SHOW_LIST_REQUEST)
      const {currentCity, currentCate, currentSort} = state
      params = Object.assign({}, params, {
        area: currentCity,
        sweetCateId: currentCate,
        sort: currentSort
      })
      api.getSweetShowList(params).then(data => {
        if (data.code === 200) {
          commit(types.SWEET_SHOW_LIST_RECEIVE, {data})
          resolve()
        } else {
          resolve(data)
        }
      }).catch(err => {
        commit(types.SWEET_SHOW_LIST_FAIL)
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.SWEET_SHOW_LIST_REQUEST] (state) {
    state.loading = true
  },
  [types.SWEET_SHOW_LIST_FAIL] (state) {
    state.loading = false
  },
  [types.SWEET_SHOW_LIST_RECEIVE] (state, {data}) {
    state.loading = false
    state.data = Object.assign({}, data)
  },
  figureCurrentArea (state, {area}) {
    state.currentCity = area
  },
  figureCurrentCate (state, {sweetCateId}) {
    state.currentCate = sweetCateId
  },
  figureCurrentSort (state, {sort}) {
    state.currentSort = sort
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
