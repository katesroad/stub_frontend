import styled from 'styled-components'
import { large } from 'styles/media-queries'

export const Wrapper = styled.div`
  display: flex;
  ${large} {
    align-items: center;
  }

  .btn-expand {
    margin-right: 0.75rem;
    font-size: 1.25rem;
    color: var(--color-c2);
    ${large} {
      display: none;
    }
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 50vw;
    max-width: 30rem;
    padding: 0 2rem;
    box-shadow: 6px 0px 64px rgba(0, 0, 0, 0.08);
    transform: translate(-100%, 0);
    z-index: 2000;
    background-color: var(--color-c12);
    transition: all 0.25s ease-in;

    &.is-visible {
      transform: translate(0, 0);
    }
    ${large} {
      position: static;
      transform: translate(0, 0);
      height: auto;
      width: auto;
      box-shadow: none;
      .nav-title {
        display: none;
      }
    }

    .nav-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1.5rem;
      padding-bottom: 3rem;
      ${large} {
        display: none;
      }

      button {
        color: #1a202c;
      }
    }

    ul {
      ${large} {
        display: flex;
        align-items: center;
      }
    }

    li {
      margin-bottom: 1.5rem;
      color: var(--color-c2);
      text-transform: capitalize;
      font-weight: var(--weight-normal);
      &:hover {
        color: var(--color-c1);
      }
      ${large} {
        margin-bottom: 0;
        margin-right: 1.5rem;
      }
    }
  }
`
