import styled from 'styled-components'

export const Wrapper = styled('main')`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding: 1rem;
    flex-grow: 1;
    max-width: 21.25rem;
    min-width: 18.5rem;
    margin-left: auto;
    margin-right: auto;
    border: var(--color-c7) 1px solid;
    border-radius: 0.25rem;
    background-color: var(--color-c12);
    .form-title {
      padding-bottom: 0.5rem;
      margin-top: 0.5rem;
      font-family: var(--title-font);
      font-family: Inter, Roboto, Helvetica Neue, sans-serif;
      font-size: x-large;
      font-weight: 900;
      color: var(--color-c2);
    }

    .icon {
      font-size: 2.5rem;
      color: var(--color-c1);
    }

    .form-description {
      padding-bottom: 2rem;
      margin-top: 0.5rem;
      font-size: small;
      color: var(--color-c3);
    }

    button[type='submit'] {
      padding: 0.5rem 0;
      width: 100%;
      margin-bottom: 2rem;
      box-shadow: 0px 2px 3px rgba(126, 58, 242, 0.15);
      border-color: var(--color-c1);
      line-height: 1.5;
      text-transform: capitalize;
      color: white;
      font-weight: 900;
      background-color: var(--color-c1);
      transition: opacity 0.1s;

      :hover {
        opacity: 0.8;
        transition: opacity 0.1s;
      }
    }

    input {
      padding-top: 0;
      padding-bottom: 0;
      color: var(--color-c2);

      :-ms-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      :-ms-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      ::-webkit-input-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      ::-moz-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      :-moz-placeholder {
        color: var(--color-c3);
        font-size: small;
      }

      /* Mozilla Firefox 19+ */
    }

    .information {
      text-align: center;
      font-weight: var(--weight-thin);
      font-size: small;
      color: var(--color-c3);

      a {
        font-weight: var(--weight-bolder);
        color: var(--color-c1);
        text-transform: capitalize;
        :hover {
          text-decoration: underline;
        }
      }
    }

    .login-error {
      text-align: left;
      margin-top: -0.8rem;
      padding-bottom: 1rem;
    }
  }
`
