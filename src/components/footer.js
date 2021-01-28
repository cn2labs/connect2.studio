import React from "react"
import styled from "styled-components"

import Container from "./styles/container"

const FooterStyles = styled.footer`
  font-size: 1.4rem;
  padding: 3rem 0;
`

export default function Footer() {
  return (
    <FooterStyles>
      <Container>Gebaut mit Gatsby, Liebe und viiiel Mio Mio Mate.</Container>
    </FooterStyles>
  )
}
