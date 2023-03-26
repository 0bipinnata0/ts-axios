import { isPlainObject, isString } from './util'

export function transformRequest(data: unknown) {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (isString(data)) {
    try {
      return JSON.parse(data)
    } catch (e) {}
  }
  return data
}
