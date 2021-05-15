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
  &:active {
    color: var(--color-c2);
  }
  h4 {
    font-family: var(--font-title);
    font-weight: var(--weight-bolder);
    font-size: calc(1.125rem + 0.04vw);
    margin-left: calc(0.375rem + 0.004vw);
    ${large} {
      font-size: 1.5rem;
    }
  }
  // ticket icon
  svg {
    font-size: calc(1.125rem +0.004vw);
    ${large} {
      font-size: 1.5rem;
    }
  }
`
