import * as React from 'react'
import { Content } from '../styled'
import { Wrapper } from './styles'
import SiteMenuList from './SiteMenus'
import UserMenuList from './UserMenus'

export const Header = () => {
  return (
    <Wrapper>
      <Content className="content">
        <SiteMenuList />
        <UserMenuList />
      </Content>
    </Wrapper>
  )
}

export default Header
