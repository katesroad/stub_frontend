import { render, AppProviders, screen } from 'test/utils'
import Logo from '.'

test('Render <Logo /> without crash', () => {
  render(<Logo />, { wrapper: AppProviders })
})
