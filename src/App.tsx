import AuthedApp from 'App.Authed'
import UnAuthedApp from 'App.UnAuthed'
import { useAuth } from 'context/auth.context'
import { Route, Switch } from 'react-router-dom'
import IndexScreen from 'screens'
import TicketScreen from 'screens/ticket'

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <Switch>
      <Route path="/" exact component={IndexScreen} />
      <Route path="/tickets/:id" exact component={TicketScreen} />
      {user ? <AuthedApp /> : <UnAuthedApp />}
    </Switch>
  )
}

export default App
