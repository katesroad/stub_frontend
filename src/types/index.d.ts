import { CSSProp } from 'styled-components'

// https://github.com/styled-components/styled-components/issues/2528
declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
