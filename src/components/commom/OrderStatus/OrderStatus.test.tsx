import { render, screen } from 'test/utils'
import { OrderStatus } from '.'
import { OrderStatusEnum } from 'types'

test('wait for payment', () => {
  render(<OrderStatus status={OrderStatusEnum.waitForPayment} />)
  expect(screen.getByText('Wait for Payment')).toBeInTheDocument()
})

test('payment is failed', () => {
  render(<OrderStatus status={OrderStatusEnum.failed} />)
  expect(screen.getByText('Failed')).toBeInTheDocument()
})

test('payment is successful', () => {
  render(<OrderStatus status={OrderStatusEnum.success} />)
  expect(screen.getByText('Successful')).toBeInTheDocument()
})
