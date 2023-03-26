import axios from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1',
})
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.info(e)
  })

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  })
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.info(e)
    })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000,
})
  .then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.info(e)
  })
