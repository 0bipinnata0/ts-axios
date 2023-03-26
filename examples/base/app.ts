import axios from '../../src/index'

// @ts-expect-error
if (module.hot) {
  // @ts-expect-error
  module.hot.accept()
}
axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: 1,
    b: 2,
  },
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: ['bar', 'baz'],
  },
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: {
      bar: 'baz',
    },
  },
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    baz: null, // 被忽略
    foo: undefined,
  },
})

axios({
  url: '/base/get#hash',
  method: 'get',
  params: {
    baz: null, // 被忽略
    foo: {
      foo: 'bar',
    },
  },
})

axios({
  url: '/base/get#hash',
  method: 'get',
  params: {
    foo: '@:$, ',
  },
})

axios({
  url: '/base/get?boo=bar',
  method: 'get',
  params: {
    foo: '@:$, ',
  },
})

const date = new Date(1679758711189)
axios({
  url: '/base/get?boo=bar',
  method: 'get',
  params: {
    foo: {
      date,
    },
  },
})

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2,
  },
})

const arr = new Int32Array([21, 31])

axios({
  method: 'post',
  url: '/base/buffer',
  data: arr,
})
