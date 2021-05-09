import { Card } from 'components/commom'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Ticket } from 'types'
import { Wrapper } from './styles'

type CategoryTicket = Pick<Ticket, 'name' | 'imgs' | 'category' | 'id'>

const TicketItem: React.FC<CategoryTicket> = ({ id, name, imgs, category }) => {
  return (
    <Link to={`/tickets/${id}`} className="ticket-item">
      <Card>
        <img src={imgs[0]} alt={name} />
        <div className="ticket-intro">
          <h6 className="ticket-name">{name}</h6>
          <p>
            <span className="ticket-category">{category}</span>
          </p>
        </div>
      </Card>
    </Link>
  )
}

type CategoryTicketsProps = {
  tickets: CategoryTicket[]
  category: string
}
export const CategoryTickets: React.FC<CategoryTicketsProps> = ({
  tickets,
  category,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <h4 className="category-name">{category}</h4>
      <ul className="category-tickets">
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <TicketItem {...ticket} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default React.memo(CategoryTickets)
