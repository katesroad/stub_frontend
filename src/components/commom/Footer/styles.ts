import styled, { css } from 'styled-components'
import { large, medium } from 'styles/media-queries'

const border = css`
  1px solid var(--color-c7)
`

export const Wrapper = styled.footer`
  color: var(--color-c2);
  background-color: var(--color-c12);

  .content {
    display: flex;
    flex-wrap: wrap;
    ${medium} {
      flex-wrap: nowrap;
      align-items: baseline;
    }
  }

  h4 {
    margin-bottom: 1.5rem;
    font-size: 1.0625rem + 1vw;
    font-familyt: var(--title-font);
    text-transform: capitalize;
    font-weight: 500;
    color: var(--color-c1);
  }

  a {
    font-size: 0.9375rem + 0.5vw;
    text-transform: capitalize;
    &:hover {
      color: var(--color-c1);
    }
  }

  p {
    line-height: 1.53;
    font-size: calc(0.8125rem + 0.5vw);
    ${large} {
      font-size: 0.9375rem;
    }
    &.copyright {
      padding: calc(1rem + 1vw) 0;
      border-top: ${border};
      text-align: center;
      color: var(--color-c2);
      opacity: 0.5;
      ${large} {
        padding: 2.5rem 0 2rem 0;
      }
    }
  }
`

export const Row = styled.div`
  flex-grow: 1;

  li {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &.row-lorem {
    padding-top: calc(1rem + 1vw);
    padding-bottom: calc(1rem + 1vw);
    ${medium} {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-right: calc(2.5rem + 1vw);
      max-width: 50%;
    }
    ${large} {
      padding-right: 4rem;
    }
    .logo {
      margin-bottom: 0.75rem;
      ${medium} {
        margin-right: 1rem;
      }
      ${large} {
        margin-right: 2rem;
        transform: translate(0, 1rem);
      }
    }
  }

  &.row-links {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: ${border};
    padding-top: calc(1rem + 1vw);
    padding-bottom: calc(1rem + 1vw);
    ${medium} {
      padding-top: calc(3.5rem + 1vw);
      padding-bottom: calc(3.5rem + 1vw);
      padding-left: calc(2.5rem + 1vw);
      border-left: ${border};
      border-top: none;
    }
    ${large} {
      padding-left: calc(4rem);
    }
    .row {
      width: 50%;
      ${medium} {
        width: 33.33%;
      }
    }
  }

  &.row-socials {
    margin-top: 2rem;
    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin-bottom: 0;
    }
    svg {
      margin-right: 1.5rem;
      font-size: 1.25rem;
    }
  }
`
