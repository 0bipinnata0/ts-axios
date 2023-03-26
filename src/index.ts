import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { buildURL } from './helpers/url'
import type { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import xhr from './xhr'

// TODO: 使用async await 替换写法
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => transformResponseData(res))
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: AxiosRequestConfig) {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse) {
  return Object.assign(res, { data: transformResponse(res.data) })
}

export default axios
