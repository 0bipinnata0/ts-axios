const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFalsy(val: any): boolean {
  return val === undefined || val === null
}

export function isArray<T>(val: any): val is Array<T> {
  return Array.isArray(val)
}

export function isString(val: any): val is string {
  return typeof val === 'string'
}
