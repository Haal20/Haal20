import React from 'react'
import logo from '../assets/angryCat.png'
import styled from '@emotion/styled'
import { almaColors, StyledAppLink } from '../styles/SharedStyles';
import { Contact } from './shared/Contact';
import { BsArrowDown } from 'react-icons/bs'

export const About = (props) => {
  // console.log(props)
  return (
    <StyledAboutContainerDiv>
      <StyledAboutBoxDiv>
        <StyledAppLogoImg src={logo} alt="logo" />
      </StyledAboutBoxDiv>
      <StyledAboutBoxDiv>
        I'm
        <div>
          Alma Härlin
        </div>
        Software Engineer Trainee @IKEA
        <br />
        <br />
        <div>
          Don't be shy, say hi!
        </div>
        <Contact />
      </StyledAboutBoxDiv>
    </StyledAboutContainerDiv>
  )
}

/* Styles for components */
const StyledAboutContainerDiv = styled.div`
  padding: 4em 0em; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const StyledAboutBoxDiv = styled.div`
  text-align: left;
  margin: 0.5em 3em; 
`
// TODO: ON HOVER DOES NOT WORK HERE
const StyledAppLogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  border: ${almaColors.black} solid 2px;
  border-radius: 0.5em;
  box-shadow: -25px 25px rgba(0, 0, 0, 0.2), -25px 25px rgba(0, 0, 0, 0.19);
  &:hover{
    box-shadow: none;
    margin: 1.5em 1.5em 2em 2em;
  }
`