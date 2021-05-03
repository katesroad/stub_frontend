import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import { useHistory } from 'react-router'
import { User } from 'types'
import client from 'utils/http'

const expiration: number =
  +(process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION as string) || 60 * 60 * 1000

type UseAuthOptions = {
  redirect?: boolean
  to?: string
}
function useAuthConf(options?: UseAuthOptions) {
  const client = useQueryClient()
  const history = useHistory()
  return {
    staleTime: +expiration - 60 * 1000,
    cacheTime: +expiration,
    retry: 0,
    onSuccess: (data: User | null) => {
      client.setQueryData('user', data)
      try {
        if (options) {
          const { redirect, to } = options
          if (redirect) history.push(to || '/')
        } else {
          history.push('/')
        }
      } catch (e) {}
    },
  }
}

function getUser(): Promise<User | null> {
  return client({ endpoint: '/auth/token' })
    .then((data) => data as User)
    .catch(() => null)
}
export function useGetUser(): UseQueryResult<User | null> {
  const conf = useAuthConf()
  return useQuery('user', getUser, conf)
}

export type Credentials = { email: string; password: string }
export function loginUser(data: Credentials): Promise<User | null> {
  return client({ endpoint: 'auth/login', method: 'POST', data }).then(
    (data) => data as User
  )
}
export function useLogin(
  options?: UseAuthOptions
): UseMutationResult<User | null> {
  const conf = useAuthConf(options)
  return useMutation('user', (data) => loginUser(data as Credentials), conf)
}

export type RegisterData = {
  email: string
  password: string
  username?: string
}
export function register(data: RegisterData): Promise<User | null> {
  return client({ endpoint: '/auth/register', method: 'POST', data })
    .then((data) => data as User)
    .catch(() => null)
}
export function useRegister(
  options?: UseAuthOptions
): UseMutationResult<User | null> {
  const conf = useAuthConf(options)
  return useMutation('user', (data) => register(data as RegisterData), conf)
}

export function logout(): Promise<null> {
  return client({ endpoint: '/auth/logout' }).then(() => null)
}
export function useLogout() {
  const conf = useAuthConf({ redirect: false })
  return useMutation('user', logout, conf)
}
