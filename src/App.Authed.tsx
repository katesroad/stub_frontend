import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const TicketsScreen = React.lazy(() => import('./screens/tickets'))
const OrderScreen = React.lazy(() => import('./screens/order'))
const OrdersScreen = React.lazy(() => import('./screens/tickets'))

export default function AuthedApp() {
  return (
    <Switch>
      <Route path="/tickets" exact component={TicketsScreen} />
      <Route path="/orders" exact component={OrdersScreen} />
      <Route path="/orders/:id" exact component={OrderScreen} />
      <Route path="*" exact component={() => <Redirect to="/tickets/" />} />
    </Switch>
  )
}
