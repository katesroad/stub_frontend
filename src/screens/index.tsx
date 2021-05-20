import { AppLayout, Content } from 'components/commom'
import { CategoryTickets } from 'components/home/CategoryTickets'
import PromotedTickets from 'components/home/PromotedTickets'
import * as React from 'react'

export default function IndexScreen() {
  const tickets = [
    {
      id: 'abc',
      title: 'Gensis Ticket',
      imgs: [
        'https://res.cloudinary.com/dmossrfdg/image/upload/v1618562249/projects/yelp/251959.0.3dcbc371-a9d2-492e-b98d-749baf003e44.jpg',
      ],
      category: 'Concert',
    },
    {
      id: 'abcd',
      title: 'Gensis Ticket',
      imgs: [
        'https://res.cloudinary.com/dmossrfdg/image/upload/v1618562249/projects/yelp/251959.0.3dcbc371-a9d2-492e-b98d-749baf003e44.jpg',
      ],
      category: 'Concert',
    },
    {
      id: 'abec',
      title: 'Gensis Ticket',
      imgs: [
        'https://res.cloudinary.com/dmossrfdg/image/upload/v1618562249/projects/yelp/251959.0.3dcbc371-a9d2-492e-b98d-749baf003e44.jpg',
      ],
      category: 'Concert',
    },
    {
      id: 'abcf',
      title: 'Gensis Ticket',
      imgs: [
        'https://res.cloudinary.com/dmossrfdg/image/upload/v1618562249/projects/yelp/251959.0.3dcbc371-a9d2-492e-b98d-749baf003e44.jpg',
      ],
      category: 'Concert',
    },
  ]
  const promotedTickets = tickets.map((ticket) => {
    return { ...ticket, description: ticket.title + Math.random().toString() }
  })

  return (
    <AppLayout>
      <Content>
        <PromotedTickets tickets={promotedTickets} />
        <CategoryTickets tickets={tickets} category={'concert'} />
        <CategoryTickets tickets={tickets} category={'sports'} />
        <CategoryTickets tickets={tickets} category={'shows'} />
      </Content>
    </AppLayout>

  )
}
