import * as React from 'react'
import { useGetUser } from 'hooks/auth.hooks'
import { User } from 'types'
import { FullscreenSpinner } from 'components/lib'

type AuthContextType = { user: User | null | undefined }

const AuthContext = React.createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'

export const AuthProvider: React.FC = (props) => {
  const { data: user, status } = useGetUser()

  const value = React.useMemo((): AuthContextType => ({ user }), [user])

  if (['loading', 'idle'].includes(status)) {
    return <FullscreenSpinner />
  }

  return <AuthContext.Provider value={value} {...props} />
}

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`Using useAuth outside of <AuthProvider />.`)
  }
  return context as AuthContextType
}
