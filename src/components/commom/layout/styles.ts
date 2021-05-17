import styled from 'styled-components'
import { large } from 'styles/media-queries'

export const Title = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  h2 {
    font-size: calc(1.5rem + 0.05vw);
    ${large} {
      font-size: 2rem;
    }
  }
`

export const LayoutContent = styled.div`
  background-color: var(--color-c12);
  border: 1px solid var(--color-c7);
  border-radius: 0.25rem;
`
