import { CSSProp } from 'styled-components'

// https://github.com/styled-components/styled-components/issues/2528
declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

// extend user data based on needs
export interface User extends Record<string, unknown> {
  id: string
  token: string
  access: string
}

export interface TicketData {
  price: number
  imgs: string[]
  name: string
  description: string
}

export interface Ticket extends TicketData {
  id: string
  available: boolean
  category: string
}

export type TicketType = 'SELL' | 'BUY'
export interface UsersTicket extends Ticket {
  type: TicketType
}

export type OrderStatus =
  | 'Created'
  | 'AwaitingPayment'
  | 'Cacelled'
  | 'Completed'

export interface Order {
  id: string
  ticket: Ticket
  status: OrderStatus
}

export type ReactQueryStatus = 'loading' | 'idle' | 'success' | 'error'
