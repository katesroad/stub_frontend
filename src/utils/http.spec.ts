import client from './http'
import { server, rest } from 'test/server'
import { Order } from 'types'

const apiUrl = process.env.REACT_APP_API_URL

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('makes POST requests to the given endpoint', async () => {
  const endpoint = 'tickets'
  const mockResult = { id: Date.now().toString(), name: 'react chat' }
  server.use(
    rest.post(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    })
  )
  const formDataRes = await client({
    endpoint,
    method: 'POST',
    data: new FormData(),
  })
  const res = await client({ endpoint, method: 'POST', data: null })
  expect(formDataRes).toEqual(mockResult)
  expect(res).toEqual(mockResult)
})

test('makes GET requests to the given endpoint', async () => {
  const endpoint = 'tickets'
  const mockResult = { id: Date.now().toString(), name: 'react chat' }
  server.use(
    rest.get(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    })
  )
  const res = await client({ endpoint })
  expect(res).toEqual(mockResult)
})

test('makes DELETE requests to the given endpoint', async () => {
  const endpoint = 'tickets'
  const mockResult = { id: Date.now().toString(), name: 'react chat' }
  server.use(
    rest.delete(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    })
  )
  const res = await client({ endpoint, method: 'DELETE' })
  expect(res).toEqual(mockResult)
})

test('makes PATCH requests to the given endpoint', async () => {
  const endpoint = 'tickets'
  const mockResult = { id: Date.now().toString(), name: 'react chat' }
  server.use(
    rest.patch(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    })
  )
  const res = await client({ endpoint, method: 'PATCH' })
  expect(res).toEqual(mockResult)
})

test('Failed request triggers token renewval inside http client implicitly', async () => {
  const endpoint = 'orders'
  const mockResult: Order[] = []
  let tried = 0
  server.use(
    rest.get(`${apiUrl}/${endpoint}`, async (req, res, ctx) => {
      return res((res) => {
        if (tried) {
          res.body = JSON.stringify(mockResult)
        } else {
          res.status = 401
        }
        tried = 1
        return res
      })
    })
  )
  const res = await client({ endpoint })
  expect(res).toEqual(mockResult)
})
