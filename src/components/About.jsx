import React from 'react'
import logo from '../assets/angryCat.png'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles';
import { Contact } from './shared/Contact';

export const About = () => {
  return (
    <StyledAboutContainerDiv>
      <StyledAboutBoxDiv>
        <StyledAppLogoImg src={logo} alt="logo" />
      </StyledAboutBoxDiv>
      <StyledAboutBoxDiv>
        I'm
        <StyledBoxDiv>
          Alma Härlin
        </StyledBoxDiv>
        Software Engineer Trainee @IKEA
      </StyledAboutBoxDiv>
    </StyledAboutContainerDiv>
  )
}
const StyledAboutContainerDiv = styled.div`
  padding: 10em 0em; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const StyledAboutBoxDiv = styled.div`
  text-align: left;
  margin: 2em 3em; 
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

const StyledBoxDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
  }
`