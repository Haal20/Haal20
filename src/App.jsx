import './styles/index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Cv } from './components/Cv'
import { Nav } from './components/Nav'
import { GithubCards } from './components/GithubCards'
import styled from '@emotion/styled'
import { almaColors } from './styles/SharedStyles'
import React, {useState, useEffect} from "react";
import { GETgitData } from './assets/apis/github'

export const App = () => {
  const [gitData, setGitData] = useState()

  const getData = async() => {
    const data = await GETgitData();
    setGitData(data)
  }

  useEffect(() => {
   getData()
  }, [])
  
  return (
      <StyledAppHeader>
        <Header/>
        <About />
        <GithubCards gitData={gitData} />
        <Cv />
        <Nav />
        <Footer />
      </StyledAppHeader>
  )
}
const StyledAppHeader = styled.header`
  background-color: ${almaColors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 2vmin);
  color: #000000;   
`