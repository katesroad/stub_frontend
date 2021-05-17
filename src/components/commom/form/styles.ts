import styled from 'styled-components'

export const FormControl = styled.label`
  display: block;
  position: relative;
  margin-bottom: 1rem;
  color: var(--color-c5);

  &.has-error {
    color: var(--color-c10);
    input {
      color: var(--color-c10);
      border-color: var(--color-c10);
    }
    .label {
      color: var(--color-c10);
    }
  }

  .label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    text-transform: capitalize;
    color: var(--color-c4);
  }

  input {
    display: block;
    width: 100%;
    min-height: calc(1.5em + 0.75rem + 2px);
    padding: 0.75rem;
    border: 1px solid var(--color-c7);
    border-radius: 0.25rem;
    color: var(--color-c2);
    font-size: 1rem;
    font-weight: 400;
    background-color: #fff;
    background-clip: padding-box;
    &:focus {
      border-color: var(--color-c1);
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
    }
  }

  .eye {
    position: absolute;
    right: 0.5rem;
    top: 1.5rem;
    color: var(--color-c3);
    font-size: x-large;
    cursor: pointer;
  }

  .eye {
    position: absolute;
    right: .5rem;
    top: 1.5rem;
    color: var(--color-c3);
    font-size: x-large;
  }

  .error-msg {
    display: block;
    margin-top: 0.5rem;
    color: var(--color-c10);
  }
`
