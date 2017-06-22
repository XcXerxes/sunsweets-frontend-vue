import * as types from '../mutation-types'
import api from '@/api'
/**
 * @state  初始化状态
 */
const state = {
  data: {},
  loading: false
}

/**
 * @getters
 */

const getters = {
  carouselList: state => state.data.data
}

const actions = {
  fetchCarouselList ({ commit }, { currentPage, limit, sort }) {
    commit(types.CAROUSEL_REQUEST)
    return api.getCarouselList({ currentPage, limit, sort })
      .then(data => {
        if (data.code === 200) {
          commit(types.CAROUSEL_RECEIVE, { data })
          return false
        } else {
          commit(types.CAROUSEL_FAIL)
          return data.message
        }
      }).catch(err => {
        commit(types.CAROUSEL_FAIL)
        return err
      })
  }
}

const mutations = {
  [types.CAROUSEL_REQUEST] (state) {
    state.loading = true
  },
  [types.CAROUSEL_RECEIVE] (state, { data }) {
    state.data = data
    state.loading = false
  },
  [types.CAROUSEL_FAIL] (state) {
    state.loading = false
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
