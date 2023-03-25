import type { AxiosRequestConfig } from './types'
import xhr from './xhr'

/**
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2,
  },
})
*/

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
