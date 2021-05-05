import { rest } from 'msw'

const apiUrl = (path: string) => process.env.REACT_APP_API_URL + '/' + path

export const handlers = [
  rest.get(apiUrl('auth/token'), async (req, res, ctx) => {
    return res(ctx.json({ id: Date.now() }))
  }),
]
