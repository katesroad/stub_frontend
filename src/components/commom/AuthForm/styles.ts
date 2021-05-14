import styled from 'styled-components'
import { xlarge } from 'styles/media-queries'

export const Wrapper = styled.div`
  max-width: 21.25rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 30rem;

  ${xlarge} {
    margin-top: calc(20vh);
  }

  form {
    padding: 2rem;
    border: var(--color-c6) 1px solid;

    .form-title {
      font-family: Arial, sans-serif;
      padding-bottom: .5rem;
      font-size: x-large;
      font-weight: 900;
      margin-top: .5rem;
    }

    .icon {
      color: var(--color-c2);
      font-size: 2.5rem;
    }

    .form-description {
      font-size: small;
      color: var(--color-c5);
      padding-bottom: 2rem;
      margin-top: .5rem;
    }

    button[type='submit'] {
      line-height: 1.5;
      width: 100%;
      text-transform: capitalize;
      color: white;
      padding: 0.5rem 0;
      font-weight: 900;
      background-color: var(--color-c2);
      border-color: var(--color-c2);
      transition: opacity .1s;
      margin-bottom: 2rem;


      :hover {
        opacity: .8;
        transition: opacity .1s;

      }
    }

    input {
      padding-top: 0;
      padding-bottom: 0;

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
      font-weight: 300;
      font-size: small;
      
      
      a {
        font-weight: 900;

        :hover {
          text-decoration: underline;
        }
      }
    }
    
    .login-error{
      text-align: left;
      margin-top: -.8rem;
      padding-bottom: 1rem;

    }
  }
`
