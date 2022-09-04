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
        <StyledAlmaDiv>
          Alma Härlin
        </StyledAlmaDiv>
        Software Engineer Trainee @IKEA
        <br />
        <br />
        <div>
          Don't be shy, say hi!
        </div>
        <Contact /> || <StyledAppLink href="#footer">
          down<BsArrowDown/>
        </StyledAppLink>
      </StyledAboutBoxDiv>
    </StyledAboutContainerDiv>
  )
}

/* Styles for components */
const StyledAlmaDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  justify-content: center;
  font-size: larger;
  width: max-content;
  transition: 1s;
  &:hover {
    text-shadow: 2px 2px 5px ${almaColors.black};
    transform: scale(1.1);
  }
`
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
const StyledAppLogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  border: ${almaColors.black} solid 2px;
  box-shadow: -25px 25px rgba(0, 0, 0, 0.2), -25px 25px rgba(0, 0, 0, 0.19);
`