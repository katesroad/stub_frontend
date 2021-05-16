import React from 'react'
import { Story } from '@storybook/react'
import { OrderStatus, OrderStatusProps } from '.'
import { OrderStatusEnum } from 'types'

export default {
  title: 'common/OrderStatus',
  component: OrderStatus,
}

const Template: Story<OrderStatusProps> = (args) => <OrderStatus {...args} />

export const Success = Template.bind({})
Success.args = {
  status: OrderStatusEnum.success,
}

export const Failed = Template.bind({})
Failed.args = {
  status: OrderStatusEnum.failed,
}

export const WaitForPayment = Template.bind({})
WaitForPayment.args = {
  status: OrderStatusEnum.waitForPayment,
}
