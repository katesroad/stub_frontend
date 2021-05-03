import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { Error } from 'components/lib'
import { FormControl } from './styles'

interface TextareaProps {
  name: string
  label: string
  placeholder?: string
}

export const Textarea = ({
  name,
  label,
  placeholder,
  ...props
}: TextareaProps) => {
  return (
    <FormControl {...props}>
      <p className="label">{label}</p>
      <Field
        name={name}
        placeholder={placeholder || 'Please input ${name}'}
        as="textarea"
      />
      <Error className="error-msg" as="small">
        <ErrorMessage name={name} />
      </Error>
    </FormControl>
  )
}
