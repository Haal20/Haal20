import React from 'react'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'

export const Header = (props) => {
  // console.log(props)
  return (
    <StyledHeaderContainerDiv>
      <div>
        Hi! Welcome to mwaaaa site~❤️
      </div>
      <StyleFlippDiv>
        ┬─┬ ノ( ゜-゜ノ)
      </StyleFlippDiv>
    </StyledHeaderContainerDiv>
  )
}

/* Styles for components */
const StyledHeaderContainerDiv = styled.div`
  background-color: ${almaColors.white};
  border-bottom: #000000 1px solid;
  width: 80%;
  padding: 1em 0em 1em;
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