import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginScreen from 'screens/login'
import RegisterScreen from 'screens/register'

export default function UnAuthedApp() {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/*" component={() => <Redirect to="/login" />} />
    </Switch>
  )
}
