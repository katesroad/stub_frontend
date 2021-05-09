import { Content } from 'components/commom'
import { CategoryTickets } from 'components/home/CategoryTickets'
import * as React from 'react'

export default function IndexScreen() {
  const tickets = [
    {
      id: 'abc',
      name: 'Gensis Ticket',
      imgs: [
        'https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/723372/6c1cc567cfd1045632c0826592c320e2',
      ],
      category: 'Concert',
    },
    {
      id: 'abcd',
      name: 'Gensis Ticket',
      imgs: [
        'https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/723372/6c1cc567cfd1045632c0826592c320e2',
      ],
      category: 'Concert',
    },
    {
      id: 'abec',
      name: 'Gensis Ticket',
      imgs: [
        'https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/723372/6c1cc567cfd1045632c0826592c320e2',
      ],
      category: 'Concert',
    },
    {
      id: 'abcf',
      name: 'Gensis Ticket',
      imgs: [
        'https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/723372/6c1cc567cfd1045632c0826592c320e2',
      ],
      category: 'Concert',
    },
  ]
  return (
    <Content>
      <h4>home page</h4>
      <CategoryTickets tickets={tickets} category={'concert'} />
      <CategoryTickets tickets={tickets} category={'sports'} />
      <CategoryTickets tickets={tickets} category={'shows'} />
    </Content>
  )
}
