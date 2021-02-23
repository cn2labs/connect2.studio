import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Container from "./styles/container"
import Outline from "./ui/outline"
import logo from "../assets/images/logo_white.svg"
import hands from "../assets/images/hands.svg"

const FooterStyles = styled.footer`
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 8rem;
  padding: 3rem 0;
  background-color: var(--darker-than-ya-coffee);

  ${Container} > * {
    flex: 1;
  }

  a:first-child {
    margin-right: 1rem;
  }
`

const GetInTouch = styled.div`
  background: url(${hands}) no-repeat center center / contain;
  padding: 8rem 0;
  margin-bottom: 3rem;

  h3 {
    margin-bottom: 2rem;
  }

  a {
    font-family: var(--headline-font);
    font-size: 2rem;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <GetInTouch className="ta-center">
        <Outline align="center">
          <span>Get in touch</span>
        </Outline>
        <a href="mailto:hi@connect2.studio" title="Schreib uns ne Mail">
          hi@connect2.studio
        </a>
      </GetInTouch>
      <Container className="flex flex--between">
        <div className="ta-left">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
        <div className="ta-center">
          <img src={logo} alt="connect2 studio Logo" height="48" />
        </div>
        <div className="ta-right">
          Gebaut mit Gatsby, Liebe und viiiel Mio Mio Mate. Peace{" "}
          <span role="img" aria-label="Peace emoji">
            ✌🏼
          </span>
        </div>
      </Container>
    </FooterStyles>
  )
}
