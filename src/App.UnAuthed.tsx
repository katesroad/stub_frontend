import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const LoginScreen = React.lazy(() => import('./screens/login'))
const RegisterScreen = React.lazy(() => import('./screens/register'))

export default function UnAuthedApp() {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/*" component={() => <Redirect to="/login" />} />
    </Switch>
  )
}
