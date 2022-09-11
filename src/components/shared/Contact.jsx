import React from 'react'
import { StyledAppLink } from '../../styles/SharedStyles'
import { BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs'

export const Contact = () => {
  return (
    <>
      <StyledAppLink
        href="mailto: alma.harlin@hotmail.com"
      >
        <BsEnvelopeFill />
      </StyledAppLink> || <StyledAppLink
        href="https://github.com/Haal20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </StyledAppLink> || <StyledAppLink
        href="https://www.linkedin.com/in/alma-h%C3%A4rlin-93b36116a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </StyledAppLink>
    </>
  )
}