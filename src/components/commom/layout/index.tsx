import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../styled'
import { LayoutContent, Title } from './styles'

export interface AppLayoutProps {
  title?: string | React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <>
      <Header />
      <Content
        style={{ flexGrow: 1, marginBottom: '.5vw', marginTop: '.5vw' }}
        as="main"
      >
        {title ? (
          <Title>
            {typeof title === 'string' ? <h2>{title}</h2> : <>{title}</>}
          </Title>
        ) : null}
        <LayoutContent {...props}>{children}</LayoutContent>
      </Content>
      <Footer />
    </>
  )
}

export const Layout: React.FC = ({ children }) => (
  <main style={{ flexGrow: 1 }}>{children}</main>
)
