import styled from 'styled-components'
import { small, medium, xlarge } from 'styles/media-queries'

export const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  ${small} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  ${medium} {
    width: 89.5%;
    padding-right: 0;
    padding-left: 0;
    margin-left: auto;
    margin-right: auto;
  }
  ${xlarge} {
    max-width: 72.5rem;
  }
`

export const Card = styled.div`
  border: 1px solid #ecedee;
  border-radius: 0.25rem;
  overflow: hidden;
`

export const Error = styled.div`
  color: var(--bs-red);
  &:empty {
    display: none;
  }
`
