import AuthForm from 'components/commom/AuthForm'
import { useLogin } from 'hooks/auth.hooks'
import * as React from 'react'

export default function RegisterScreen() {
  React.useEffect(() => {
    document.title = 'Register'
    return () => {
      document.title = 'StubHub'
    }
  }, [])
  const m = useLogin()
  return <AuthForm mutation={m} type="register" />
}
