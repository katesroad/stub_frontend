import { renderQueryHook } from 'test/utils'
import { useGetUser } from 'hooks/auth.hooks'

test('get auth token', async () => {
  const { result, waitFor } = renderQueryHook(useGetUser)
  await waitFor(() => result.current.isFetched)
  expect(result.current.isFetched).toBe(true)
})
