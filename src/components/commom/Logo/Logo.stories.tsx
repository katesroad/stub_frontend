import { Story } from '@storybook/react'
import React from 'react'
import SiteLogo from '.'

export default {
  title: 'common',
  component: SiteLogo,
}

const Template: Story<React.FC> = () => <SiteLogo />

export const Logo = Template.bind({})
Template.args = {}
