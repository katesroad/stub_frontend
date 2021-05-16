import { render, AppProviders } from 'test/utils'
import { Footer } from '.'

test('test with user logined', () => {
  render(<Footer />, { wrapper: AppProviders })
})
