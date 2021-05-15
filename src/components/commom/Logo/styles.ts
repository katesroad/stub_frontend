import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { large } from 'styles/media-queries'

export const Wrapper = styled(Link).attrs(() => ({
  to: '/',
  'aria-label': 'logo',
}))`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: var(--color-c2);
  &:hover,
  &:active {
    color: var(--color-c1);
  }

  h4 {
    margin-left: calc(0.375rem + 0.004vw);
    font-family: var(--font-title);
    font-weight: var(--weight-bolder);
    font-size: calc(1.125rem + 0.04vw);
    ${large} {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  svg {
    font-size: calc(1.125rem +0.004vw);
    color: var(--color-c2);
    ${large} {
      font-size: 1.5rem;
    }
  }
`
