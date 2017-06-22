import Vue from 'vue'
import Vuex from 'vuex'
import carousel from './modules/carousel'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    carousel
  },
  strict: true,
  plugins: [createLogger()]
})
