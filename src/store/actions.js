import * as types from './mutation-types'
import api from '@/api'

export default {
  fetchAllCate ({commit, state}) {
    return new Promise((resolve, reject) => {
      api.getAllCate().then(data => {
        if (data.code === 200) {
          commit(types.CATE_ALL_RECEIVE, {data: data.data})
          resolve()
        } else {
          resolve(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
