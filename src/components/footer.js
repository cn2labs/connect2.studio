import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Container from "./styles/container"
import Outline from "./ui/outline"
import logo from "../assets/images/logo_white.svg"
import hands from "../assets/images/hands.svg"
import hillcloudLogo from "../assets/images/hillcloud.svg"
import cn2Logo from "../assets/images/cn2-logo.svg"

const FooterStyles = styled.footer`
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 8rem;
  padding: 3rem 0;
  background-color: var(--darker-than-ya-coffee);

  ${Container} > * {
    flex: 1;
    max-height: 100%;
  }

  a:first-child {
    margin-right: 1rem;
  }

  .partner-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      opacity: 0.5;
      transition: opacity ease 0.2s;

      &:hover {
        opacity: 1;
      }
    }
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

const Studio = styled.img`
  height: 45px;
  width: 45px;
  animation: rotation 25s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
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
      <Container className="flex between l-disappear">
        <div className="ta-left">
          <Link to="/impressum">Impressum</Link>
        </div>
        <div className="ta-center">
          <Studio src={logo} alt="connect2 studio Logo" height="48" />
        </div>
        <div className="ta-right">
          <Link title="Datenschutz" to="/datenschutz">Datenschutz</Link>
        </div>
      </Container>
      <Container className="disappear l-flex-appear v-center between">
        <div className="ta-left">
          <Link title="Impressum" to="/impressum">Impressum</Link>
          <Link title="Datenschutz" to="/datenschutz">Datenschutz</Link>
        </div>
        <div className="partner-logos">
          <Studio src={logo} alt="connect2 studio Logo" height="45" />
          <a
            title="connect2 Link"
            href="https://connect2.gmbh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cn2Logo} alt="connect2 Logo" height="24" />
          </a>
          <a
            title="hillcloud Link"
            href="https://alsfeld.cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hillcloudLogo} alt="hillcloud Logo" height="16" />
          </a>
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
