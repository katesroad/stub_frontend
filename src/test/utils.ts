import { render as rtlRender } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import AppProviders, { QueryProvider } from 'context'
import React from 'react'

type RenderConf = {
  wrapper?: React.ComponentType
}
const renderUI = (ui: React.ReactElement, conf?: RenderConf) => {
  const options = { wrapper: AppProviders, ...conf }
  return rtlRender(ui, options)
}

const renderQueryHook = (hook: any, conf?: RenderConf) => {
  const options = { wrapper: QueryProvider }
  return renderHook(() => hook(), options)
}

export * from '@testing-library/react'
export { renderUI, renderQueryHook, AppProviders, QueryProvider, userEvent }
