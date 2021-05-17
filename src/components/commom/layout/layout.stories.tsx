import React from 'react'
import { Story } from '@storybook/react'
import { AppLayout, AppLayoutProps } from '.'

export default {
  title: 'common/layout/layout',
  component: AppLayout,
}

const Template: Story<AppLayoutProps> = (args) => <AppLayout {...args} />

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: (
    <div>
      <h2>Orders</h2>
      <button>Add order</button>
    </div>
  ),
}

export const WithOutTitle = Template.bind({})
WithOutTitle.args = {}
