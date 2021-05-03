import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppProviders from 'context'
import React from 'react'

type RenderConf = {
  wrapper?: React.ComponentType
}
const renderUI = (ui: React.ReactElement, conf?: RenderConf) => {
  const options = { wrapper: AppProviders, ...conf }
  return rtlRender(ui, options)
}

export * from '@testing-library/react'
export { renderUI, AppProviders, userEvent }
