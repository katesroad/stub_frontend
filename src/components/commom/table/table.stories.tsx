import { Story } from '@storybook/react'
import React from 'react'
import { Table as SiteTable } from '.'

export default {
  title: 'common/layout',
  component: SiteTable,
}

const Template: Story<React.FC> = () => <SiteTable fetchData={()=>null} pageCount={100} columns={[]} data={[]} />
export const Footer = Template.bind({})
Template.args = {}
