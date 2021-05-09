// eslint-disable-next-line
import styled from 'styled-components/macro'
import { ImSpinner6 } from 'react-icons/im'

export const FullscreenSpinner = () => {
  return (
    <div
      css={`
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
      `}
    >
      <ImSpinner6 />
    </div>
  )
}

export const Spinner = () => <ImSpinner6 />

export * from './styled'
export * from './button'
export * from './withAuth'
export * from './modal'
export * from './AuthForm'
export * from './form'
export * from './ErrorBoundary'
