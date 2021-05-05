import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyle'
import { AuthProvider } from './auth.context'
import { ThemeProvider } from './theme.context'

export const client = new QueryClient()
export const QueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
)
const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <QueryProvider>
          <AuthProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </AuthProvider>
        </QueryProvider>
      </ThemeProvider>
    </>
  )
}
export default AppProviders
