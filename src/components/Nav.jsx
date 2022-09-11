import React from 'react'
import styled from '@emotion/styled'
import { almaColors} from '../styles/SharedStyles'
import { BsHouseFill } from 'react-icons/bs'
import { FaCodeBranch, FaAddressCard, FaRegFileAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

export const Nav = (props) => {
  return (
    <StyledNavContainerDiv>
        <Link style={{padding: "0.5rem"}} to="/Haal20  "><StyledNavBoxDiv><BsHouseFill />Home</StyledNavBoxDiv></Link>
        <Link style={{padding: "0.5rem"}} to="/github"><StyledNavBoxDiv><FaCodeBranch />GitHub</StyledNavBoxDiv></Link>
        <Link style={{padding: "0.5rem"}} to="/cv"><StyledNavBoxDiv><FaRegFileAlt />CV</StyledNavBoxDiv></Link>
        <Link style={{padding: "0.5rem"}} to="/contact"><StyledNavBoxDiv><FaAddressCard />Contacts</StyledNavBoxDiv></Link>
    </StyledNavContainerDiv>
  )
}

const StyledNavContainerDiv = styled.div`
    display: flex;
    
`
const StyledNavBoxDiv = styled.div`
    color: ${almaColors.blue};
    text-decoration: none;
`