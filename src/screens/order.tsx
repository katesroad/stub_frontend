import { AppLayout } from 'components/commom'
import OrderDetail from 'components/order/OrderDetail'
import * as React from 'react'
import { OrderStatusEnum } from 'types'

export default function OrderScreen() {
  const title = <span>Order Detail</span>
  const order = {
    id: 'order id',
    ticket: {
      id: 'id',
      title: 'Concet',
      description: 'aaa',
      category: 'concert',
      available: true,
      imgs: [''],
      price: 100,
    },
    status: OrderStatusEnum.waitForPayment,
    created_at: new Date().toLocaleDateString(),
  }
  return (
    <AppLayout title={title}>
      <OrderDetail order={order} />
    </AppLayout>
  )
}
