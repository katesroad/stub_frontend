import { Story } from '@storybook/react'
import React from 'react'
import { Header as SiteHeader } from '.'

export default {
  title: 'common/layout',
  component: SiteHeader,
}

const Template: Story<React.FC> = () => <SiteHeader />
export const Header = Template.bind({})
Template.args = {}
