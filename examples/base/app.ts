import axios from '../../src/index'

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
