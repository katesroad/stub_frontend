import * as React from 'react'
import { IoTicketOutline } from 'react-icons/io5'
import { Wrapper } from './styles'

export default function Logo() {
  return (
    <Wrapper>
      <IoTicketOutline />
      <h4>tickety</h4>
    </Wrapper>
  )
}
