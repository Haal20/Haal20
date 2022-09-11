import React from 'react'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'
import { Link } from "react-router-dom"
import { Nav } from '../components/Nav'

export const Header = () => {
  return (
    <StyledHeaderContainerDiv>
      <Link to="Haal20">
        <StyledHeaderBoxDiv>Hi! Welcome to my site~❤️</StyledHeaderBoxDiv>
      </Link>
      <div>
        <Nav />
      </div>
    </StyledHeaderContainerDiv>
  )
}
const StyledHeaderContainerDiv = styled.div`
  background-color: ${almaColors.grey100};
  position: fixed;
  border-bottom: #000000 1px solid;
  width: 100%;
  padding: 0.5em 0em 0.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const StyledHeaderBoxDiv = styled.div`
  color: ${almaColors.blue};
  text-decoration: none;
`