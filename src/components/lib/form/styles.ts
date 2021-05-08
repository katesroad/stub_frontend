import styled from 'styled-components'

export const FormControl = styled.label`
  display: block;
  margin-bottom: 1rem;
  color: var(--color-c3);

  &.has-error {
    color: var(--color-c1);
    input {
      border-color: var(--color-c1);
    }
  }

  .label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    text-transform: capitalize;
  }

  input {
    display: block;
    width: 100%;
    min-height: calc(1.5em + 0.75rem + 2px);
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--color-c3);
    appearance: none;
    border-radius: 0.25rem;
  }

  .error-msg {
    display: block;
    margin-top: 0.5rem;
    color: var(--color-c1);
  }
`
