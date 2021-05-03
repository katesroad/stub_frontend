import AppProviders from '../src/context'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <AppProviders>
      <Story />
    </AppProviders>
  ),
]
