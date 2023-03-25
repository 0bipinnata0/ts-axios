使用 https://docs.travis-ci.com/user/build-stages

```sh
pnpm i -D eslint-webpack-plugin express ts-loader webpack webpack-dev-middleware webpack-hot-middleware body-parser
```

webpack webpack-dev-middleware webpack-hot-middleware
ts-loader eslint-webpack-plugin

express body-parser

## 1. GET 的基本使用

```ts
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2,
  },
})
```

## 2. GET 参数值为数组

```ts
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz'],
  },
})

// /base/get?foo[]=bar&foo[]=baz
```

## 3. GET 参数值为对象

```ts
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz',
    },
  },
})
```

## 4. GET 空值(undefined | null)忽略

```ts
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null, // 被忽略
  },
})
```

## 5. GET 丢弃 url 中的哈希标记

```ts
axios({
  method: 'get',
  url: '/base/get#hash'
  params: {
    foo: 'bar'
  }
})

```

## 6. 特殊字符支持 **'@'**, **':'**, **'$'**, **','**, **' '**, **'['**, **']'**

```ts
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, ',
  },
})
```

## 7. GET 保留 url 中已经存在的参数

```ts
axios({
  method: 'get',
  url: '/base/get?boo=bar',
  params: {
    bar: 'baz',
  },
})
// /base/get?boo=bar&bar=baz
```

## 8. GET 参数值为 Date 类型

```ts
const date = new Date()
axios({
  method: 'get',
  url: 'base/get',
  params: {
    date,
  },
})
// date.toIOSString();
// /base/get?date=2022-02-02T02:22:22.030Z
```
