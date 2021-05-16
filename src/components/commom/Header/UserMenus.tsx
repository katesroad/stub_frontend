import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuLink } from '@reach/menu-button'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { Wrapper, MenuList } from './UserMenus.styles'
import { useAuth } from 'context/auth.context'

const UserMenus: React.FC = () => {
  let { user } = useAuth()
  user = {
    username: 'tickety',
    avatar: 'https://avatars.githubusercontent.com/u/3837437?s=60&v=4',
  }
  const handleLogout = () => {}

  return (
    <Wrapper>
      {1 ? (
        <Menu>
          {({ isExpanded }) => (
            <>
              <MenuButton className="menu-button">
                <span className="user">
                  <img src={user?.avatar} /> {user?.username}
                </span>
                <span aria-hidden>
                  {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                </span>
              </MenuButton>
              <MenuList css={``}>
                <MenuLink href="/orders" as="a">
                  orders
                </MenuLink>
                <MenuLink href="/tickets" as="a">
                  tickets
                </MenuLink>
                <MenuLink href="/account" as="a">
                  account
                </MenuLink>
                <MenuItem onSelect={handleLogout} className="logout">
                  <span>login out</span>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      ) : (
        <Link className="btn-login" to="/login">
          Login
        </Link>
      )}
    </Wrapper>
  )
}

export default UserMenus
