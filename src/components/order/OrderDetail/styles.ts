import styled from 'styled-components'
import { medium } from 'styles/media-queries'

export const Wrapper = styled.div`
  .order-ticket {
    display: block;
    img {
      display: block;
    }
  }
  .order-info {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    ${medium} {
      padding: 1.5rem 0;
    }
  }
`

export const OrderInfoUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.143;
  &:nth-child(2n + 1) {
    width: 30%;
  }
  &:nth-child(2n) {
    width: 60%;
  }

  .key {
    padding-bottom: 0.5rem;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--color-c4);
  }

  .value {
    color: var(--color-c2);
  }
`
