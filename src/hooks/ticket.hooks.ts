import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { Ticket, TicketData, TicketType, UsersTicket } from 'types'
import client from 'utils/http'

// get ticket list for user
export function getUsersTickets(type: TicketType): Promise<UsersTicket[]> {
  return client({ endpoint: `tickets?type=${type}` })
    .then((data) => data as UsersTicket[])
    .catch((e) => [])
}

export function useGetUsersTickets(type: TicketType): UseQueryResult<Ticket[]> {
  return useQuery(['usersTickets', type], () =>
    getUsersTickets(type as TicketType)
  )
}

// get ticket by ticket id
export function getTicket(id: string): Promise<Ticket | null> {
  return client({ endpoint: `tickets/${id}` })
    .then((data) => data as Ticket)
    .catch((e) => null)
}
export function useGetTicketById(id: string): UseQueryResult<Ticket> {
  return useQuery(['ticket', id], () => getTicket(id))
}

// create ticket for ticket seller
export function createTicket(ticket: TicketData): Promise<Ticket | null> {
  return client({ endpoint: '/tickets', method: 'POST', data: ticket })
    .then((data) => data as Ticket)
    .catch((e) => null)
}
export function useCreateTicket(): UseMutationResult<Ticket | null> {
  const client = useQueryClient()
  return useMutation(
    'tickets',
    (ticket) => createTicket(ticket as TicketData),
    {
      onSuccess: (ticket: Ticket | null) => {
        if (ticket) {
          client.setQueryData(['ticket', ticket.id], ticket)
          client.refetchQueries(['tickets'])
          client.refetchQueries(['usersTickets', 'SELL'])
        }
      },
    }
  )
}

// update ticket's price for ticket owner
export function updateTicket(
  ticket: Pick<Ticket, 'id' | 'price'>
): Promise<Ticket | null> {
  const { id, price } = ticket
  return client({
    endpoint: `/tickets/${id}`,
    method: 'PATCH',
    data: { price },
  })
    .then((data) => data as Ticket)
    .catch((e) => null)
}
export function useUpdateTicket() {
  const client = useQueryClient()
  return useMutation(
    'ticket',
    (ticketUpdate: Pick<Ticket, 'id' | 'price'>) => updateTicket(ticketUpdate),
    {
      onSuccess: (data: Ticket | null) => {
        if (data) {
          client.setQueryData(['ticket', data.id], data)
          client.refetchQueries('tickets')
          client.refetchQueries(['tickets', data.category])
          client.refetchQueries(['usersTickets', 'SELL'])
        }
      },
    }
  )
}

// get the tickets by category name, at home page
export function getTicketsByCategory(category: string): Promise<Ticket[]> {
  return client({ endpoint: `/tickets?category=${category}` })
    .then((data) => data as Ticket[])
    .catch((e) => [])
}
export function useGetTicketsByCategory(category: string) {
  return useQuery(['tickets', category], () => getTicketsByCategory(category))
}
