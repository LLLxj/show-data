import request from '@/utils/request'

const baseUrl = '/apiPro'
const baseSpiderUrl = '/spiderPro'

class Spider {
  static list (data) {
    return request({
      url: `${baseUrl}/spider/list`,
      method: 'get',
      params: data
    })
  }

  static logInfo (data) {
    return request({
      url: `${baseUrl}/spider/logInfo`,
      method: 'get',
      params: data
    })
  }

  static info (data) {
    return request({
      url: `${baseUrl}/spider/info/` + data,
      method: 'get'
    })
  }

  static update (data) {
    return request({
      url: `${baseUrl}/spider/update`,
      method: 'post',
      data
    })
  }

  static login (data) {
    return request({
      url: `${baseUrl}/spider/login`,
      method: 'post',
      data
    })
  }

  static userInfo (data) {
    return request({
      url: `${baseUrl}/spider/userInfo`,
      method: 'get'
    })
  }

  static multiUpdate (data) {
    return request({
      url: `${baseUrl}/spider/multiUpdate`,
      method: 'post',
      data
    })
  }

  static spiderLogin (data) {
    return request({
      url: `${baseSpiderUrl}/login`,
      method: 'post',
      data
    })
  }

  static getCode (data) {
    return request({
      url: `${baseSpiderUrl}/send_phone_code?`,
      method: 'get',
      params: data
    })
  }
}

export default Spider
