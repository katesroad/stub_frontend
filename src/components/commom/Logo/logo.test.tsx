import { AppProviders, render } from 'test/utils'
import Logo from '.'

test('render logo', () => {
  render(<Logo />, { wrapper: AppProviders })
})
