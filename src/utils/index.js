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

export {checkStatus, _parseResponse}

/**
 * @methods isMobile 手机
 */
window.__isMobile = window.navigator.userAgent.includes('Mobile')

/**
 * @methods isPc pc端
 */
window.__isPc = !window.navigator.userAgent.includes('Mobile')

