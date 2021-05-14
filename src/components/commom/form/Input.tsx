import * as React from 'react'
import { useState } from 'react'
import { ErrorMessage, Field, useField } from 'formik'
import { Error } from 'components/commom'
import { FormControl } from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

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
  const [show, setShow] = useState(false)

  const error = meta.touched && meta.error
  return (
    <FormControl className={error ? 'form-control has-error' : 'form-control'}>
      {label ? <span className="label">{label}</span> : null}
      <Field
        {...field}
        type={type === 'text' || show ? 'text' : 'password'}
        placeholder={placeholder || `Enter ${name}`}
      />
      {type === 'password' && show ? (
        <AiOutlineEyeInvisible className="eye" onClick={() => setShow(false)} />
      ) : type === 'password' && !show ? (
        <AiOutlineEye className="eye" onClick={() => setShow(true)} />
      ) : null}

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
