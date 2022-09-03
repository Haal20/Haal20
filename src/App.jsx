import './styles/index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
import styled from '@emotion/styled'
import { almaColors } from './styles/SharedStyles'
import { useState, useEffect, componentDidMount } from 'react'
import { GETgitData } from './assets/apis/github'
import { gitUrl } from './assets/apis/api-urls'


// delivering promise
console.log(GETgitData())

// delivering array of object
fetch(gitUrl)
      .then(res => {return res.json()})
      .then(json => { console.log(json)
        //setGitData(json)
    })


export const App = () => {
  const [gitData, setGitData] = useState()

  //  const getData = () => {
  //   const gitData = GETgitData();
  //   setGitData(gitData)
  // }

  // const getData = () => {
  //   fetch(gitUrl)
  //     .then(res => {return res.json()})
  //     .then(json => {
  //       setGitData(json)
  //   })
  // }

  // componentDidMount = () => {
  //   getData()
  //   console.log('dsldfhsikahgf   ' + gitData)
  // }

  return (
      <StyledAppHeader>
        <Header/>
        <About />

        <Portfolio/>
        <Experience />
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

