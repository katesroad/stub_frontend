import { Spinner, ErrorBoundaryWrap } from 'components/commom'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyle'
import { AuthProvider } from './auth.context'

export const client = new QueryClient()
export const QueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
)
const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <QueryProvider>
        <AuthProvider>
          <BrowserRouter>
            <React.Suspense fallback={<Spinner />}>
              <ErrorBoundaryWrap>{children}</ErrorBoundaryWrap>
            </React.Suspense>
          </BrowserRouter>
        </AuthProvider>
      </QueryProvider>
    </>
  )
}
export default AppProviders
