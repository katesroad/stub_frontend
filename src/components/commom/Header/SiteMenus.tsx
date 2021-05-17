import * as React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Wrapper } from './SiteMenus.styles'

export default function SiteMenuList() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  const handleClick = () => setMenuIsOpen((menuIsOpen) => !menuIsOpen)

  return (
    <Wrapper>
      <button
        role="button"
        aria-label="expand-menu-left"
        className="btn btn-expand"
        onClick={handleClick}
      >
        <AiOutlineMenu />
      </button>

      <Logo className="logo" />

      <nav className={menuIsOpen ? 'is-visible' : ''}>
        <h4 className="nav-title">
          <Logo />
          <button
            role="button"
            aria-label="close-menu-left"
            className="btn"
            onClick={handleClick}
          >
            <AiOutlineClose />
          </button>
        </h4>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/category/sports">sports</Link>
          </li>
          <li>
            <Link to="/category/concerts">concerts</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}
