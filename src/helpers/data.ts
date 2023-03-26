import { isPlainObject } from './util'

export function transformRequest(data: unknown) {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
