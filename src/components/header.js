import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import logo from "../assets/images/logo_white.svg"
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
  --submenu-distance: 0.4rem;

  color: #fff;
  font-family: var(--headline-font);
  font-size: 1.6rem;

  a.active,
  a:hover {
    color: var(--mommys-blonde-boy);
  }

  ul li {
    display: block;
    position: relative;

    :not(:last-child) {
      margin-right: 3rem;
    }

    &.has-submenu {
      padding: var(--submenu-distance) 0;
    }
  }

  ul li > ul {
    font-size: 1.4rem;
    display: none;
    left: 0;
    position: absolute;
    margin-top: var(--submenu-distance);
    opacity: 0;
    visibility: hidden;
  }

  ul li:hover > ul {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  ul li ul li {
    margin: 0.8rem 0;
    width: 100%;
    transition: opacity 0.2s ease;

    :not(:last-child) {
      margin-right: 2rem;
    }
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
            <ul className="flex flex--between">
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li className="has-submenu">
                <Link activeClassName="active" to="/service">
                  Service
                </Link>
                <ul>
                  <li>
                    <Link activeClassName="active" to="/service/webentwicklung">
                      Webentwicklung
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to="/service/design">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link activeClassName="active" to="/service/beratung">
                      Beratung
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/projekte">
                  Projekte
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </NavStyles>
        </Fade>
      </div>
    </Container>
  </HeaderStyles>
)

export default Header
