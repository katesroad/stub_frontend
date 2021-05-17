import { Story } from '@storybook/react'
import React from 'react'
import { Footer as SiteFooter } from '.'

export default {
  title: 'common/layout',
  component: SiteFooter,
}

const Template: Story<React.FC> = () => <SiteFooter />
export const Footer = Template.bind({})
Template.args = {}
