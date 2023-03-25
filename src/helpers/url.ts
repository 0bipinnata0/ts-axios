import { isArray, isDate, isFalsy, isPlainObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  {
    const serializedParams = Object.entries(params)
      .filter(([, val]) => !isFalsy(val)) // 忽略空值
      .map(([key, val]) => (isArray(val) ? [key + '[]', val] : [key, val])) // 处理数组
      .map(([key, value]) => (isDate(value) ? [key, value.toISOString()] : [key, value])) // 处理日期
      .map(([key, value]) => (isPlainObject(value) ? [key, JSON.stringify(value)] : [key, value])) // 处理对象
      .map(([key, value]) => [encode(`${key}`), encode(`${value}`)]) // 编码
      .join('&') // 拼接

    const markIndex = url.indexOf('#')
    const connectIndex = url.indexOf('?')
    const parsedUrl = url.slice(0, markIndex) + (connectIndex === -1 ? '?' : '&') + serializedParams
    console.info('parsedUrl', parsedUrl)
  }

  const parts: string[] = []

  Object.keys(params).forEach((key) => {
    const val = params[key]
    if (isFalsy(val)) {
      return
    }

    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
