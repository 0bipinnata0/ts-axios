import { isDate, isPlainObject, isFalsy, isArray } from '../../src/helpers/util'

describe('helpers: util', () => {
  describe('isXX', () => {
    test(' should validate Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })

    test(' should validate Object', () => {
      expect(isPlainObject({})).toBeTruthy()
      expect(isPlainObject(new Date())).toBeFalsy()
    })
    test(' should validate Falsy', () => {
      expect(isFalsy(null)).toBeTruthy()
      expect(isFalsy(undefined)).toBeTruthy()
      expect(isFalsy(Date.now())).toBeFalsy()
    })
    test(' should validate Array', () => {
      expect(isArray([])).toBeTruthy()
      expect(isArray(Date.now())).toBeFalsy()
    })
  })
})
