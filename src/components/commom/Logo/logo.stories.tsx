import { Story } from '@storybook/react'
import React from 'react'
import Logo from '.'

export default {
  title: 'common/logo',
  component: Logo,
}

const Template: Story<React.FC> = () => <Logo />

export const SiteLogo = Template.bind({})
Template.args = {}
