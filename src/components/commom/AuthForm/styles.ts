import styled from 'styled-components'
import { xlarge } from 'styles/media-queries'

export const Wrapper = styled.div`
  max-width: 21.25rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  ${xlarge} {
    margin-top: calc(3rem + 1vh);
  }

  form {
    padding: 2rem 1rem 4rem 1rem;
    .form-title {
      padding-bottom: 2rem;
      text-transform: capitalize;
    }
    button[type='submit'] {
      line-height: 1.5;
      width: 100%;
      text-transform: uppercase;
      background-color: #28a745;
      border-color: #28a745;
    }
  }
`
