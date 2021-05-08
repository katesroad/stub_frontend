import * as React from 'react'
import { Field, ErrorMessage, useField } from 'formik'
import { Error } from 'components/lib'
import { FormControl } from './styles'

export interface InputProps {
  name: string
  label?: string
  placeholder?: string
  type?: 'text' | 'password'
}
const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  const [field, meta] = useField({ name, type, ...props })
  const eleId = `input-${name}`
  const error = meta.touched && meta.error
  return (
    <FormControl {...props}>
      {label ? <label htmlFor={eleId}>{label}</label> : null}
      <Field
        {...field}
        name={name}
        id={eleId}
        type={type}
        placeholder={placeholder || `Enter ${name}`}
        className={error ? 'has-error' : ''}
      />
      <Error className="error-msg" as="small" aria-label="error-message">
        <ErrorMessage name={name} />
      </Error>
    </FormControl>
  )
}

Input.defaultProps = {
  type: 'text',
}

export { Input }
