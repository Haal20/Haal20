import React from 'react'
import styled from '@emotion/styled'
import { almaColors} from '../styles/SharedStyles'
import { BsHouseFill, BsArrowDown } from 'react-icons/bs'
import { FaCodeBranch, FaAddressCard, FaDAndD } from 'react-icons/fa'
import { useState } from 'react'

export const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <StyledNavContainerDiv>
        <StyledNavLink href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><BsHouseFill/></StyledNavLink>
        <StyledNavLink href='#github' onClick={() => setActiveNav('#github')} className={activeNav === '#github' ? 'active': ''}><FaCodeBranch/></StyledNavLink>
        <StyledNavLink href='#cv' onClick={() => setActiveNav('#cv')} className={activeNav === '#cv' ? 'active': ''}><FaAddressCard/></StyledNavLink>
        <StyledNavLink href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active': ''}><BsArrowDown/></StyledNavLink>
    </StyledNavContainerDiv>
  )
}

// TODO: Make so the active changes dependent on what is in the window
/* Styles for components */
const StyledNavContainerDiv = styled.div`
    background-color: rgba(0,0,0,0.3);
    padding: 0.5em 1em;
    width: max-content;
    position: fixed;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    border-radius: 3rem;
`

export const StyledNavLink = styled.a`
    color: ${almaColors.blue};
    transition: 0.5s;
    font-size: 1.6rem;
    padding: 0.2rem 1rem;
    &:hover {
        background-color: #ffffff66;
        border-radius: 2rem;
    }
    &:active {
        background-color: ${almaColors.white};
        border-radius: 3rem;
    }
`