import { Redirect, Route, Switch } from 'react-router-dom'
import OrderScreen from 'screens/order'
import OrdersScreen from 'screens/orders'
import TicketsScreen from 'screens/tickets'

export default function AuthedApp() {
  return (
    <Switch>
      <Route path="/tickets" exact component={TicketsScreen} />
      <Route path="/orders" exact component={OrdersScreen} />
      <Route path="/order" exact component={OrderScreen} />
      <Route path="/orders/:id" exact component={OrderScreen} />
      <Route path="*" exact component={() => <Redirect to="/tickets/" />} />
    </Switch>
  )
}
