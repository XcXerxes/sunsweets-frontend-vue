import { checkStatus, _parseResponse } from '@/utils'
import config from '@/config'

const _parseParams = (method, params) => {
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
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
  getCarouselList ({currentPage, limit, sort}) {
    sort = sort ? `&srot=${sort}` : ''
    return fetch(`${config.orginUrl}frontend/carousel/list?limit=${limit}&currentPage=${currentPage}${sort}`, _parseParams())
      .then(checkStatus)
      .then(_parseResponse)
      .then(data => {
        return data
      }).catch(err => {
        return err
      })
  }
}
