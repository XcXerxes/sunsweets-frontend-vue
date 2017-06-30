import * as types from './mutation-types'
export default {
  [types.CATE_ALL_RECEIVE] (state, { data }) {
    if (data.length > 0) {
      state.allCate = [{
        id: 'all',
        title: '全部'
      }].concat(data).map(item => {
        return {
          id: item.id,
          title: item.title,
          area: item.area,
          value: item.id
        }
      })
    }
  }
}
