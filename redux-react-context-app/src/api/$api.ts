/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './users'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'

  return {
    users: {
      get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
