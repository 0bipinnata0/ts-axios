import { buildURL } from '../../src/helpers/url'

describe('helpers: url', () => {
  describe('buildURL', () => {
    test('buildURL 基本使用', () => {
      expect(
        buildURL('/simple/get', {
          method: 'get',
          params: {
            a: 1,
            b: 2,
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 参数值为数组', () => {
      expect(
        buildURL('/simple/get', {
          method: 'get',
          params: {
            foo: ['bar', 'baz'],
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 参数值为对象', () => {
      expect(
        buildURL('/simple/get', {
          method: 'get',
          params: {
            foo: {
              bar: 'baz',
            },
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 空值(undefined | null)', () => {
      expect(
        buildURL('/simple/get', {
          method: 'get',
          params: {
            foo: {
              foo: 'bar',
              baz: null, // 被忽略
            },
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 丢弃 url 中的哈希标记', () => {
      expect(
        buildURL('/simple/get#hash', {
          method: 'get',
          params: {
            foo: {
              foo: 'bar',
              baz: null, // 被忽略
            },
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 特殊字符支持', () => {
      expect(
        buildURL('/simple/get#hash', {
          method: 'get',
          params: {
            foo: {
              foo: '@:$, ',
            },
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL 保留 url 中已经存在的参数', () => {
      expect(
        buildURL('/base/get?boo=bar', {
          method: 'get',
          params: {
            foo: {
              foo: '@:$, ',
            },
          },
        })
      ).toMatchSnapshot()
    })

    test('buildURL参数值为 Date', () => {
      const date = new Date(1679758711189)
      expect(
        buildURL('/base/get?boo=bar', {
          method: 'get',
          params: {
            foo: {
              date,
            },
          },
        })
      ).toMatchSnapshot()
    })
  })
})
