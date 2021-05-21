import { render, AppProviders } from 'test/utils'
import { Table } from '.'

test('with user login', () => {
  render(<Table fetchData={()=>null} pageCount={100} columns={[]} data={[]} />, { wrapper: AppProviders })
})
