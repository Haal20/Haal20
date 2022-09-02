import React from 'react'
import styled from '@emotion/styled'
import { almaColors, StyledAppLink } from '../styles/SharedStyles'
import { Contact } from './shared/Contact'
import { BsArrowUp } from 'react-icons/bs'

export const Footer = (props) => {
  // console.log(props)
  return (
    <StyledFooterContainerDiv>
      <div>
        <Contact /> || <StyledAppLink href="#">
          up<BsArrowUp/>
        </StyledAppLink>
      </div>
      <StyleFlippDiv>
        (╯°□°）╯︵ ┻━┻
      </StyleFlippDiv>
      <div id='footer'>
        Made with ❤️ in SWE © 2022
      </div>
    </StyledFooterContainerDiv>
  )
}

/* Styles for components */
const StyledFooterContainerDiv = styled.div`
  border-top: #000000 1px solid;
  width: 90%;
  padding: 1em 0em 3em 0em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const StyleFlippDiv= styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  margin: 0.5em 1em;
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
    transform: scale(1.5);
  }
`