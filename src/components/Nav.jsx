import React from 'react'
import styled from '@emotion/styled'
import { almaColors, StyledAppLink } from '../styles/SharedStyles'
import { BsArrowUp } from 'react-icons/bs'

export const Nav = (props) => {
  // console.log(props)
  return (
    <StyledNavContainerDiv>
        <StyledAppLink href='#'>up<BsArrowUp/></StyledAppLink>
    </StyledNavContainerDiv>
  )
}

/* Styles for components */
const StyledNavContainerDiv = styled.div`
    background-color: #E5E5E5;
    opacity: 0.98;
    margin: 0.5em;
    padding: 1em 0em;
    width: 100%;
    /* border: 2px solid #000000; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`