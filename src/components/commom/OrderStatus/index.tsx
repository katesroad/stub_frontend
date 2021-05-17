import styled from 'styled-components'
import * as React from 'react'
import { OrderStatusEnum } from 'types'

const Wrapper = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  text-align: center;
  font-weight: var(--weight-normal);
  color: var(--color-c12) !important;
  &.success {
    background-color: var(--color-c9);
  }
  &.failed {
    background-color: var(--color-c10);
  }
  &.pending {
    background-color: var(--color-c11);
  }
`

export interface OrderStatusProps {
  status: OrderStatusEnum
  className?: string
}

export const OrderStatus = ({ status, className = '' }: OrderStatusProps) => {
  let statusText = ''
  switch (status) {
    case OrderStatusEnum.success:
      statusText = 'Successful'
      className += ' success'
      break
    case OrderStatusEnum.failed:
      statusText = 'Failed'
      className += ' failed'
      break
    case OrderStatusEnum.waitForPayment:
      statusText = 'Wait for Payment'
      className += ' pending'
      break
    default:
      throw new Error('Unknown order status')
  }
  return <Wrapper className={className}>{statusText}</Wrapper>
}
