import { Error, Button } from 'components/commom'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <Error role="alert">
      <h6>Something went wrong:</h6>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Error>
  )
}

export const ErrorBoundaryWrap: React.FC = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      window.location.reload()
    }}
  >
    {children}
  </ErrorBoundary>
)
