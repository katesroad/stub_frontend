import * as React from 'react'
import { Formik, Form } from 'formik'
import { initialValues, AuthSchema } from './auth.helper'
import { Wrapper } from './styles'
import { UseMutationResult } from 'react-query'
import { User } from 'types'
import { TextField } from 'components/lib/form/TextField'
import { Button, Error } from 'components/lib'

type AuthFormProps = {
  mutation: UseMutationResult<User | null>
  type: 'login' | 'register'
}
export default function AuthForm({ type, mutation }: AuthFormProps) {
  const [errMsg, setErrMsg] = React.useState('')
  const { mutateAsync: doLogin } = mutation
  const handleSubmit = (values: unknown) => {
    doLogin(values).catch(() => {
      setErrMsg('Login failed')
    })
  }
  // eslint-disable-next-line
  const getClearErrorHandler = (props: any) => () => {
    props.setSubmitting(false)
    setErrMsg('')
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AuthSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        return (
          <Wrapper>
            <Form onFocus={getClearErrorHandler(props)}>
              <h2 className="form-title">{type}</h2>
              {type === 'register' ? (
                <TextField
                  label="user name"
                  name="username"
                  placeholder="user name"
                />
              ) : null}
              <TextField label="email" name="email" placeholder="email" />
              <TextField
                label="password"
                name="password"
                placeholder="password"
                type="password"
              />
              <p>
                <Button type="submit" className="btn--submit">
                  {type}
                </Button>
              </p>
              <Error as="p">{errMsg}</Error>
            </Form>
          </Wrapper>
        )
      }}
    </Formik>
  )
}
