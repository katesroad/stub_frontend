import * as React from 'react'
import { Link } from 'react-router-dom'
import { Order } from 'types'
import { Wrapper, OrderInfoUnit } from './styles'
import { OrderStatus } from '../../commom/OrderStatus'

const OrderDetail: React.FC<{ order: Order }> = ({ order }) => {
  const { ticket } = order
  return (
    <Wrapper>
      <Link to={`/ticket/${ticket.id}`} className="order-ticket">
        <img src={ticket.imgs[0]} alt={ticket.title} />
      </Link>
      <div className="order-info">
        <OrderInfoUnit>
          <span className="key">Code</span>
          <span className="value">{ticket.title}</span>
        </OrderInfoUnit>
        <OrderInfoUnit>
          <span className="key">Name</span>
          <span className="value">{ticket.title}</span>
        </OrderInfoUnit>
        <OrderInfoUnit>
          <span className="key">price</span>
          <span className="value">{ticket.price}</span>
        </OrderInfoUnit>
        <OrderInfoUnit>
          <span className="key">order date</span>
          <span className="value">{order.created_at}</span>
        </OrderInfoUnit>
        <OrderInfoUnit>
          <span className="key">order status</span>
          <span className="value">Wait for Payment</span>
          <OrderStatus status={order.status} className="value" />
        </OrderInfoUnit>
      </div>
    </Wrapper>
  )
}

export default OrderDetail
