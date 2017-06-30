import { checkStatus, _parseResponse } from '@/utils'
import config from '@/config'

const _parseParams = (method, params) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (!method) {
    return {
      headers
    }
  }
  return {
    headers,
    method,
    body: JSON.stringify(params)
  }
}
export default {
  /**
   * @getCarouselList  获取轮播图列表
   */
  getCarouselList ({ currentPage, limit, sort }) {
    sort = sort ? `&sort=${sort}` : ''
    return fetch(`${config.orginUrl}frontend/carousel/list?limit=${limit}&currentPage=${currentPage}${sort}`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => {
        return data
      }).catch(err => {
        return err
      })
  },
  /**
   * @getSweetShowList 排序
   */
  getSweetShowList ({ currentPage, limit, area, sweetCateId, sort }) {
    area = (area && area !== 'all') ? `&area=${area}` : ''
    sweetCateId = (sweetCateId && sweetCateId !== 'all') ? `&sweetCateId=${sweetCateId}` : ''
    sort = sort ? `&sort=${sort}-desc` : ''
    return fetch(`${config.orginUrl}frontend/sweetShow/list?limit=${limit}&currentPage=${currentPage}${area}${sweetCateId}${sort}`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => {
        return data
      }).catch(err => {
        return err
      })
  },
  /**
   * @getAllCate 获取所有的分类
   */
  getAllCate () {
    return new Promise((resolve, reject) => {
      if (this.allCate) {
        return resolve(this.allCate)
      }
      fetch(`${config.orginUrl}frontend/sweetCate/all`, _parseParams())
        .then(checkStatus)
        .then(_parseResponse)
        .then(data => {
          this.allCate = data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  }
}
