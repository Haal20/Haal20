import React from 'react'
import resume from '../assets/almaCV_2022_eng.pdf'
import { StyledAppLink } from '../styles/SharedStyles'
import styled from '@emotion/styled'
import { Document, Page, pdfjs } from 'react-pdf'
import { almaColors } from '../styles/SharedStyles'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const Cv = (props) => {
  // console.log(props)
  return (
    <StyleExperienceContainerDiv id='cv'>
      <div>
        Experience/Education
        <p>Hard to see? <StyledAppLink href={resume} download className={'App-link'} >Download CV here</StyledAppLink></p>
        <div>
          <Document
            file={resume}
            onLoadError={console.error}
            style={{ with: '100vw', height: 'auto'}}
          >
            <StyleCvContainerDiv>
              <StyleCvBoxDiv>
                <Page pageIndex={0}/>
              </StyleCvBoxDiv>
              <StyleCvBoxDiv>
                <Page pageIndex={1}/>
              </StyleCvBoxDiv>
            </StyleCvContainerDiv>
          </Document>
        </div>
      </div>
    </StyleExperienceContainerDiv>
  )
}

/* Styles for components */
const StyleExperienceContainerDiv = styled.div`
  background-color: ${almaColors.grey100};
  padding: 1em 0em; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyleCvContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const StyleCvBoxDiv = styled.div`
background-color: ${almaColors.white};
 border: ${almaColors.black} 1px solid;
 padding: 0.5em;
 margin: 0.5em 1em;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`