import styled from 'styled-components'
import { MenuList as ReachMenuList } from '@reach/menu-button'
import '@reach/menu-button/styles.css'

export const Wrapper = styled.div`
  .menu-button {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    span {
      display: flex;
      align-items: center;
      &.user {
        margin-right: 0.5rem;
        font-size: 1rem;
        color: var(--color-c3);
      }
    }
    img {
      max-width: 2rem;
      margin-right: 0.5rem;
      border-radius: 50%;
    }
  }

  .btn-login {
    padding: 0.25rem 0.5rem;
    margin-left: 0.25rem;
    border-radius: 0.25rem;
    font-weight: var(--weight-bolder);
    border: 1px solid var(--color-c1);
    font-size: 0.875rem;
    text-transform: capitalize;
    color: var(--color-c12);
    background-color: var(--color-c1);
  }
`

export const MenuList = styled(ReachMenuList)`
  margin-top: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 8px 15px rgba(0, 0, 0, 0.09);
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--color-c2);

  [data-reach-menu-item] {
    padding: 0 1rem;
    margin-bottom: 1rem;
    &:hover {
      color: var(--color-c1);
      background-color: transparent;
    }
    &.logout {
      color: var(--color-c10);
      &:hover {
        color: var(--color-c10);
      }
    }
  }
`
