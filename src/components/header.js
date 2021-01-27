import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/logo_white.svg"

import Container from "./styles/container"

const HeaderStyles = styled.header`
  padding: 4rem 0 8rem 0;
`

const LogoStyles = styled.img`
  :hover {
    animation: spin 8s linear infinite;
    animation-fill-mode: both;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

const NavStyles = styled.nav`
  color: #fff;
  font-weight: bold;

  a:not(:last-child) {
    margin-right: 3rem;
  }

  a.active {
    color: var(--lavender-soap);
  }
`

const Header = () => (
  <HeaderStyles>
    <Container>
      <div className="flex flex--between">
        <Link to="/">
          <LogoStyles src={logo} alt="connect2 studio Logo" height="64" />
        </Link>
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
      </div>
    </Container>
  </HeaderStyles>
)

export default Header
