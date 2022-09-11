import React from 'react'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'
import { Routes, Route, Link } from "react-router-dom"
import { Nav } from '../components/Nav'

export const Header = (props) => {
  // console.log(props)
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
  background-color: ${almaColors.white};
  border-bottom: #000000 1px solid;
  width: 80%;
  padding: 1em 0em 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const StyledHeaderBoxDiv = styled.div`
  color: ${almaColors.blue};
  text-decoration: none;
`