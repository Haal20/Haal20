import React from 'react'
import styled from '@emotion/styled'
import { almaColors } from '../styles/SharedStyles'

export const Portfolio = (props) => {
  return (
    <StyledPortfolioContainerDiv>
        <div>
            Portfolio
        </div>
        <StyledPortfolioBoxDiv>
            My git repos
        </StyledPortfolioBoxDiv>
    </StyledPortfolioContainerDiv>
  )
}

/* Styles for components */
const StyledPortfolioContainerDiv = styled.div`
  padding: 1em 0em; 
  background-color: ${almaColors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyledPortfolioBoxDiv = styled.div`
  text-shadow:  2px 2px 5px ${almaColors.grey500};
  margin: 0.5em 1em;
  transition: 1s;
  &:hover{
    text-shadow: 2px 2px 5px ${almaColors.black};
    transform: scale(1.7);
  }
`