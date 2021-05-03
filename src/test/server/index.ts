import { server as devServer } from './dev-server'
import { server as testServer } from './test-server'

const isTestEnv = process.env.NODE_ENV === 'test' ? true : false

export const server = isTestEnv ? testServer : devServer
export * from 'msw'
