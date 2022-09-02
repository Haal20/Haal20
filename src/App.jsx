import './styles/index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
import styled from '@emotion/styled'
import { almaColors } from './styles/SharedStyles'

export const App = () => {
  return (
      <StyledAppHeader>
        <Header />
        <About />
        <Portfolio />
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