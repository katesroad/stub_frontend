import AuthForm from 'components/commom/AuthForm'
import { useLogin } from 'hooks/auth.hooks'
import * as React from 'react'

export default function LoginScreen() {
  React.useEffect(() => {
    document.title = 'Login'
    return () => {
      document.title = 'StubHub'
    }
  }, [])
  const m = useLogin()
  return <AuthForm mutation={m} type="login" />
}
