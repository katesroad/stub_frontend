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
    max-width: 68.75rem;
  }
`

export const Card = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.375rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  color: var(--bs-white);
  background-color: transparent;
  ${xlarge} {
    padding: 0.35rem 0.5rem;
  }
  // spinner
  svg {
    margin-left: 0.5rem;
  }
`
