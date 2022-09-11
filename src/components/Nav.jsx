import React from 'react'
import styled from '@emotion/styled'
import { almaColors} from '../styles/SharedStyles'
import { BsHouseFill } from 'react-icons/bs'
import { FaCodeBranch, FaAddressCard, FaRegFileAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { StyledAppLink } from '../styles/SharedStyles'

export const Nav = () => {
  return (
    <StyledNavContainerDiv>
        <Link style={{padding: "0.5rem"}} to="/Haal20  "><BsHouseFill /><StyledAppLink>Home</StyledAppLink></Link>
        <Link style={{padding: "0.5rem"}} to="/github"><FaCodeBranch /><StyledAppLink>GitHub</StyledAppLink></Link>
        <Link style={{padding: "0.5rem"}} to="/cv"><FaRegFileAlt /><StyledAppLink>CV</StyledAppLink></Link>
        <Link style={{padding: "0.5rem"}} to="/contact"><FaAddressCard /><StyledAppLink>Contacts</StyledAppLink></Link>
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