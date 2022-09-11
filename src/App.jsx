import './styles/index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Cv } from './components/Cv'
import { GithubCards } from './components/GithubCards'
import styled from '@emotion/styled'
import { almaColors } from './styles/SharedStyles'
import React, {useState, useEffect} from "react";
import { GETgitData } from './assets/apis/github'
import { Routes, Route } from "react-router-dom"
import { ContactMe } from '../src/components/ContactMe';

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
        <Routes>
          <Route path="Haal20" element={<About />} />
          <Route path="github" element={<GithubCards gitData={gitData} />} />
          <Route path="cv" element={<Cv />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>
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
  font-size: calc(5px + 2vmin);
  color: ${almaColors.black};
`