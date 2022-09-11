import React from 'react'
import { Contact } from '../components/shared/Contact'
import styled from '@emotion/styled'

export const ContactMe = () => {
  return (
    <StyledContactDiv>
        <div>
            Don't be shy, say hi!
        </div>
        <div>
            <Contact />
        </div>
    </StyledContactDiv>
  )
}
const StyledContactDiv = styled.div`
    padding: 15rem 0rem 5rem 0rem;
    text-align: left;
`