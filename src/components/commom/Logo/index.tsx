import * as React from 'react'
import { IoTicketOutline } from 'react-icons/io5'
import { Wrapper } from './styles'

const Logo: React.FC<{ className?: string }> = (props) => {
  return (
    <Wrapper {...props}>
      <IoTicketOutline />
      <span>tickety</span>
    </Wrapper>
  )
}

export default Logo
