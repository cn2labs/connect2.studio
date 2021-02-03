import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import logo from "../images/logo_white.svg"
import Container from "./styles/container"

const HeaderStyles = styled.header`
  padding: 6rem 0 10rem 0;
`

const LogoStyles = styled.img`
  animation: spin 16s linear infinite;
  transform-origin: center;

  @keyframes spin {
    from {
      transform: rotate(0deg) translateZ(0);
    }
    to {
      transform: rotate(359deg) translateZ(0);
    }
  }
`

const NavStyles = styled.nav`
  color: #fff;
  font-family: var(--headline-font);
  font-size: 1.6rem;

  a:not(:last-child) {
    margin-right: 3rem;
  }

  a.active {
    color: var(--candy-strawberrys);
  }
`

const Header = () => (
  <HeaderStyles>
    <Container>
      <div className="flex flex--between">
        <Link to="/">
          <LogoStyles src={logo} alt="connect2 studio Logo" height="64" />
        </Link>
        <Fade>
          <NavStyles>
            <Link to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/service">Service</Link>
            <Link to="/team">Team</Link>
            <Link to="/projekte">Projekte</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/kontakt">Kontakt</Link>
          </NavStyles>
        </Fade>
      </div>
    </Container>
  </HeaderStyles>
)

export default Header
