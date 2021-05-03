import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { Order, Ticket } from 'types'
import client from 'utils/http'

// get order list for user
export function getOrders(): Promise<Order[]> {
  return client({ endpoint: 'orders' })
    .then((data) => data as Order[])
    .catch((e) => [])
}

export function useGetOrders(): UseQueryResult<Order[]> {
  return useQuery(['orders'], getOrders)
}

// get order by order id
export function getOrderById(id: string): Promise<Order | null> {
  return client({ endpoint: `orders/${id}` })
    .then((data) => data as Order)
    .catch((e) => null)
}
export function useGetOrderById(id: string): UseQueryResult<Order> {
  return useQuery(['order', id], () => getOrderById(id))
}

// create order for buying ticket
export function createOrder(ticket: Ticket): Promise<Order | null> {
  return client({ endpoint: '/orders', method: 'POST', data: ticket })
    .then((order) => order as Order)
    .catch((e) => null)
}
export function useCreateOrder(): UseMutationResult<Order | null> {
  const client = useQueryClient()
  return useMutation('order', (ticket) => createOrder(ticket as Ticket), {
    onSuccess: (order: Order | null) => {
      if (order) {
        client.refetchQueries('orders')
        client.setQueryData(['order', order.id], order)
      }
    },
  })
}

// update order's status
export function updateOrder(
  order: Pick<Order, 'id' | 'status'>
): Promise<Order | null> {
  const { id, status } = order
  return client({
    endpoint: `/orders/${id}`,
    method: 'PATCH',
    data: { status },
  })
    .then((data) => data as Order)
    .catch((e) => null)
}
export function useUpdateOrder() {
  const client = useQueryClient()
  return useMutation(
    'order',
    (orderUpdate: Pick<Order, 'id' | 'status'>) => updateOrder(orderUpdate),
    {
      onSuccess: (data: Order | null) => {
        if (data) {
          client.setQueryData(['order', data.id], data)
          client.refetchQueries('orders')
        }
      },
    }
  )
}
