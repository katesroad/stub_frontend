import { renewToken } from './auth.provider'
const BASE_URL = process.env.REACT_APP_API_URL as string

export interface Request extends RequestInit {
  endpoint: string
  data?: unknown
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  retry?: number
}

export default async function client(request: Request): Promise<unknown> {
  const { method = 'GET', endpoint, data, headers = {}, retry = 0 } = request
  const config: RequestInit = { method, credentials: 'include' }
  if (!['GET', 'DELETE'].includes(method)) {
    if (data instanceof FormData) {
      delete config.headers
      config.body = data
    } else {
      config.headers = { 'Content-type': 'application/json', ...headers }
      config.body = JSON.stringify(data)
    }
  }

  const path = endpoint.indexOf('/') === 0 ? endpoint : `/${endpoint}`
  const url = `${BASE_URL}${path}`
  return window.fetch(url, config).then(async (response) => {
    if (response.ok) {
      try {
        return response.json()
      } catch (e) {
        console.warn(e)
        return
      }
    }
    if (response.status === 401 && retry === 0) {
      request.retry = 1
      const tokenRenewed = await renewToken()
      if (tokenRenewed) return client(request)
      else return Promise.reject(data)
    } else {
      return Promise.reject(data)
    }
  })
}
