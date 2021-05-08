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
}: InputProps) => {
  const [field, meta] = useField({ name })
  const error = meta.touched && meta.error
  return (
    <FormControl className={error ? 'form-control has-error' : 'form-control'}>
      {label ? <span className="label">{label}</span> : null}
      <Field
        {...field}
        type={type}
        placeholder={placeholder || `Enter ${name}`}
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
