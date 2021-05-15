import * as React from 'react'
import { Form, Formik } from 'formik'
import { AuthSchema, initialValues } from './auth.helper'
import { Wrapper } from './styles'
import { UseMutationResult } from 'react-query'
import { User } from 'types'
import { Button, Error, Input } from 'components/commom'
import { IoTicketOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

type AuthFormProps = {
  mutation: UseMutationResult<User | null>
  type: 'login' | 'register'
}
export default function AuthForm({ type, mutation }: AuthFormProps) {
  const [errMsg, setErrMsg] = React.useState('')
  const [loginStatus, setLoginStatus] = React.useState(false)
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

  const getDescription = (type: string) => {
    switch (type) {
      case 'register':
        return {
          title: 'Sign up in Tickety',
          description: 'Sign up to buy & sell tickets',
        }
      default:
        return {
          title: 'Welcome to tickey',
          description: 'Please log in to your account.',
        }
    }
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
              <IoTicketOutline className="icon" />
              <h2 className="form-title">{getDescription(type).title}</h2>
              <h3 className="form-description">
                {getDescription(type).description}
              </h3>
              {type === 'register' ? (
                <Input
                  label="Full name"
                  name="username"
                  placeholder="Enter your Full name"
                />
              ) : null}
              <Input label="email" name="email" placeholder="Enter your mail" />
              <Input
                label="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              {type === 'register' ? (
                <Input
                  label="Confirm Password"
                  name="confirm"
                  type="password"
                  placeholder="Confirm your password"
                />
              ) : loginStatus ? (
                <div className="information login-error">
                  Don’t remember your password?
                  <Link to="/register"> reset it. </Link>
                </div>
              ) : null}
              <p>
                <Button onClick={() => setLoginStatus(true)} type="submit">
                  {type}
                </Button>
              </p>
              <Error as="p">{errMsg}</Error>
              {type === 'login' ? (
                <div className="information">
                  Don’t have an account?
                  <Link to="/register"> sign up. </Link>
                </div>
              ) : (
                <div className="information">
                  Already have an account?
                  <Link to="/login"> Log in. </Link>
                </div>
              )}
            </Form>
          </Wrapper>
        )
      }}
    </Formik>
  )
}
