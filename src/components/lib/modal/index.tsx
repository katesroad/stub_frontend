import * as React from 'react'
import { Dialog } from '@reach/dialog'
import './style.scss'

const callAll = (...fns: any[]) => (...args: any) =>
  fns.forEach((fn) => {
    try {
      fn && fn(...args)
    } catch (e) {
      console.log(e)
    }
  })

type ModalContextType = [boolean, (status: boolean) => void]
const ModalContext = React.createContext<ModalContextType>([false, () => {}])

type ModalProps = {
  value?: ModalContextType
  children: React.ReactNode
  [key: string]: unknown
}

// the modal that wraps the modal opening status
export const Modal = (props: ModalProps) => {
  const value = React.useState<boolean>(false)
  const providerProps = { value, ...props }
  return <ModalContext.Provider {...providerProps} />
}

export const ModalContentBase: React.FC<unknown> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  const onDismiss = () => setIsOpen(false)
  return (
    <Dialog isOpen={isOpen} onDismiss={onDismiss} {...props}>
      {children}
    </Dialog>
  )
}

export function ModalCloseBtn({ children: child, ...props }: any) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
    ...props,
  })
}

export function ModalOpenBtn({ children: child }: any) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => {
      setIsOpen(true)
    }, child.props.onClick),
  })
}

export function useModal() {
  return React.useContext(ModalContext)
}
