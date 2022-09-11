import React from 'react'
import { Contact } from '../components/shared/Contact'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'

export const ContactMe = () => {
  return (
    <StyledContactDiv>
        <StyledBoxDiv>
            Don't be shy, say hi!
        </StyledBoxDiv>
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

const StyledBoxDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
  }
`