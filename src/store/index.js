import Vue from 'vue'
import Vuex from 'vuex'
import carousel from './modules/carousel'
import show from './modules/show'
import shop from './modules/shop'
import sweetShow from './modules/sweetShow'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    carousel,
    show,
    shop,
    sweetShow
  },
  strict: true,
  plugins: [createLogger()]
})
