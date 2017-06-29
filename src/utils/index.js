import regionData from '../config/city'

/**
 * @checkStatus    检测 fetch 状态
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/**
 * @_parseResponse   解析fetch 请求返回值
 */
const _parseResponse = (response) => response.json()

/**
 * @methods isMobile 手机
 */
window.__isMobile = window.navigator.userAgent.includes('Mobile')

/**
 * @methods isPc pc端
 */
window.__isPc = !window.navigator.userAgent.includes('Mobile')

/**
 * @methods formatCity
 */
const formatCity = () => {
  const city = regionData['86']
  let arr = [{
    value: '',
    title: '全部'
  }]
  for (let item in city) {
    arr.push({
      value: item,
      title: city[item]
    })
  }
  return arr
}

/**
 * @methods formatArea
 */
const formatArea = (currentCity) => {
  let area = regionData[currentCity]
  if (currentCity === '') {
    area = regionData['110000']
  }
  if (!area) {
    return ''
  }
  let arr = [{
    value: 'all',
    title: '全部'
  }]
  for (let item in area) {
    arr.push({
      value: item,
      title: area[item]
    })
  }
  return arr
}

export {checkStatus, _parseResponse, formatCity, formatArea}
