import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyle'
import { AuthProvider } from './auth.context'
import { ThemeProvider } from './theme.context'

const client = new QueryClient()
const AppProviders: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
export default AppProviders
