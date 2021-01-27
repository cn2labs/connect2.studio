import React from "react"
import styled from "styled-components"

import Container from "./styles/container"

const FooterStyles = styled.footer`
  padding: 3rem 0;
`

export default function Footer() {
  return (
    <FooterStyles>
      <Container>
        © {new Date().getFullYear()} | Powered by
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> + WordPress
      </Container>
    </FooterStyles>
  )
}
