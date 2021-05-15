import { render, AppProviders } from 'test/utils'
import { Footer } from './footer'

test('render <Footer /> without crash', () => {
  render(<Footer />, { wrappers: AppProviders })
})
