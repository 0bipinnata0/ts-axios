import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }

  Object.keys(headers).forEach((name) => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): Record<string, any> {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  const entities = headers
    .split('\r\n')
    .map((i) => i.trim())
    // 清楚无效项
    .filter((i) => i.length > 0)
    // 清楚无效项
    .filter((i) => i[0] !== ':')
    .map((line) => {
      const [key, ...values] = line.split(':')
      return [key, values.join(':').trim()]
    })

  return Object.fromEntries(entities)
}
