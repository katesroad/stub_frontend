import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { Error } from 'components/lib'
import { FormControl } from './styles'

interface TextFieldProps {
  name: string
  label?: string
  placeholder?: string
  type?: 'text' | 'password'
}

export const TextField = ({
  name,
  label,
  placeholder,
  type = 'text',
  ...props
}: TextFieldProps) => {
  return (
    <FormControl {...props}>
      {label ? <p className="label">{label}</p> : null}
      <Field
        name={name}
        placeholder={placeholder || `Please input ${name}`}
        type={type}
      />
      <Error className="error-msg" as="small">
        <ErrorMessage name={name} />
      </Error>
    </FormControl>
  )
}
