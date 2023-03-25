export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST`'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'options'
  | 'OPTIONS'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'

export interface AxiosRequestConfig {
  url: string
  method: Method
  data?: any
  params?: any
}
