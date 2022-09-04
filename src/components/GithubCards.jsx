import React from 'react'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'


export const GithubCards = (props) => {
  console.log(props.gitData)
  return (
    <StyledContainerDiv id='github'>
        <StyledBoxDiv>
            My github reops
        </StyledBoxDiv>
        <StyledCardContainerDiv>
          {props.gitData?.map(el => {
            el.data
            return <StyledCardLink target="_blank" rel="noopener noreferrer"href={el.html_url} key={el.id}>
              {el.name}
              </StyledCardLink>
          })}
        </StyledCardContainerDiv>
    </StyledContainerDiv>
  )
}

/* Styles for components */
const StyledContainerDiv = styled.div`
  padding: 1em 0em; 
  background-color: ${almaColors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyledBoxDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  margin: 0.5em 1em;
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
  }
`
const StyledCardContainerDiv = styled.div`
  margin: 0.5em 1em;
  padding: 0em 1em 0em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const StyledCardLink = styled.a`
  border: 2px ${almaColors.black} solid;
  margin: 2em 2em;
  padding: 0em 1em;
  width: 9em;
  height: 5em;
  background-color: ${almaColors.grey200};
  color: ${almaColors.blue};
  display: flex;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  
  transition: 0.2s;
  &:hover{
    margin: 1.5em 1.5em 2em 2em;
    box-shadow: -10px 10px ${almaColors.black}, -10px 10px ${almaColors.black};
  }
`