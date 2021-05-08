import AuthForm from 'components/commom/AuthForm'
import * as React from 'react'
import { VscClose } from 'react-icons/vsc'
import { useLogin, useRegister } from 'hooks/auth.hooks'
import { Modal, ModalContentBase } from 'components/commom/modal'

type LoginDialogProps = {
  value: [boolean, (show: boolean) => void]
}
export default function LoginDialog({ value }: LoginDialogProps) {
  const loginMutation = useLogin({ redirect: false })
  const reigsterMutation = useRegister({ redirect: false })
  const [, setShowDialog] = value
  const close = () => setShowDialog(false)
  const [type, setType] = React.useState<'login' | 'register'>('login')
  return (
    <Modal value={value}>
      <ModalContentBase aria-label="auth-form">
        <span onClick={close} className="btn--close at-with-auth">
          <VscClose />
        </span>
        <AuthForm
          type={type}
          mutation={type === 'login' ? loginMutation : reigsterMutation}
        />
        <p className="switch-type">
          {type === 'login' ? (
            <>
              Don't have an account ?&nbsp;
              <button onClick={() => setType('register')}>Register</button>
            </>
          ) : (
            <>
              Already have an account?&nbsp;
              <button onClick={() => setType('login')}>Login</button>
            </>
          )}
        </p>
      </ModalContentBase>
    </Modal>
  )
}
