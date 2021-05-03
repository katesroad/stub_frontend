import { useAuth } from 'context/auth.context'
import * as React from 'react'
import { AlertDialog, AlertDialogLabel } from '@reach/alert-dialog'
import { Button } from 'components/lib'
import LoginDialog from './LoginDialog'
import './style.scss'

type WithAuthOptions = {
  content: React.ReactNode
  [key: string]: unknown
}

export function withAuth(
  element: React.ReactElement,
  options: WithAuthOptions
): React.ReactElement {
  const { user } = useAuth()
  const [showDialog, setShowDialog] = React.useState(false)
  const [showLoginForm, setShowLoginForm] = React.useState(false)
  // eslint-disable-next-line
  const cancelRef = React.useRef<any>()
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const handleClickYes = () => {
    setShowDialog(false)
    setShowLoginForm(true)
  }
  React.useEffect(() => {
    if (!user) {
      setShowLoginForm(false)
    }
  }, [user])
  if (user) return element
  return (
    <div>
      <b onClick={open}>{element}</b>
      {showDialog && (
        <AlertDialog leastDestructiveRef={cancelRef} onDismiss={close}>
          <AlertDialogLabel>{options.content}</AlertDialogLabel>
          <p className="alert-buttons">
            <Button onClick={handleClickYes} className="btn btn--confirm">
              Login
            </Button>
            <Button ref={cancelRef} onClick={close} className="btn--cancel">
              Cancle
            </Button>
          </p>
        </AlertDialog>
      )}
      <LoginDialog value={[showLoginForm, setShowLoginForm]} />
    </div>
  )
}
