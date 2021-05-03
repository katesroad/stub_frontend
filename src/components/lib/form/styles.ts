import styled from 'styled-components'

export const FormControl = styled.label.attrs(() => ({
  className: 'form-control',
}))`
  display: block;
  margin-bottom: 1rem;
  .label {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    min-height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #8bbafe;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }
  }
  textarea {
    min-height: 6rem;
  }
  .error-msg {
    display: block;
    margin-top: 0.5rem;
    color: var(--bs-red);
  }
  button[type='submit'] {
    background-color: #fff;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 0.375rem;
    margin-left: auto;
    margin-right: auto;
  }
`
