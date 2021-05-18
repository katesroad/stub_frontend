// extend user data based on needs
export interface User extends Record<string, unknown> {
  token: string
  access: string
  id: string
}

export type ReactQueryStatus = 'loading' | 'idle' | 'success' | 'error'

export type TicketType = 'BUY' | 'SELL'
export interface TicketData {
  imgs: string[]
  price: number
  description: string
  title: string
  category: string
}

export interface Ticket extends TicketData {
  id: string
  available: boolean
}

export enum OrderStatusEnum {
  waitForPayment = 'WaitForPayment',
  success = 'Success',
  failed = 'Failed',
}

export interface Order {
  id: string
  status: OrderStatusEnum
  ticket: Ticket
  created_at: string
}
