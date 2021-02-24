import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../assets/images/logo_white.svg"
import Container from "./styles/container"

const HeaderStyles = styled.header`
  padding: 5rem 0 12rem 0;
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
  display: none;
  /* Width in PX > 1200px */
  /* ==== = LARGE = ==== */
  @media only screen and (min-width: 75em) {
    --submenu-distance: 0.4rem;

    color: var(--almost-white);
    font-family: var(--headline-font);
    font-size: 1.5rem;
    display: block;

    a {
      transition: color 0.1s ease;
    }

    a.active,
    a:hover {
      color: var(--candy-strawberrys);
    }

    ul li {
      display: block;
      position: relative;

      :not(:last-child) {
        margin-right: 2rem;
      }

      &.has-submenu {
        padding: var(--submenu-distance) 0;
      }
    }

    ul li > ul {
      font-size: 1.4rem;
      left: 0;
      position: absolute;
      margin-top: var(--submenu-distance);
      opacity: 0;
      visibility: hidden;
      transform: translateY(5px);
      transition: all 0.2s ease;
    }

    ul li:hover > ul {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ul li ul li {
      margin: 0.8rem 0;
      width: 100%;
      transition: opacity 0.2s ease;

      :not(:last-child) {
        margin-right: 2rem;
      }

      a:hover {
        color: var(--lavender-soap);
      }
    }

    li.cta-item {
      color: var(--purple-haze);
      margin-left: 2rem;
    }
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--darker-than-ya-coffee);
  height: 100vh;
  width: 100%;
  padding: 30% 10% 20% 10%;
  div {
    width: 100%;
    margin-top: 3rem;
    img {
      animation: rotation 25s infinite linear;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }
`

const MobileMenuList = styled.ul`
  font-family: var(--headline-font);
  list-style: none;
  li {
    padding: 0.8rem 0;
  }
  > li:last-child {
    color: var(--lavender-soap);
  }
  ul {
    list-style: none;
    transform: translateX(12px);
    padding-top: 0.8rem;
    color: var(--nets-court);
  }
`

const Header = () => {
  const [showMenu, setshowMenu] = useState(false)

  const menuActive = () => {
    setshowMenu(!showMenu)
    const body = document.querySelector("body")
    body.classList.toggle("no-scroll")
  }
  return (
    <HeaderStyles>
      <Container>
        <div className="flex flex--between">
          <Link to="/">
            <LogoStyles src={logo} alt="connect2 studio Logo" height="64" />
          </Link>
          <div className="l-disappear">
            {" "}
            <button
              onClick={menuActive}
              className={` hamburger hamburger--minus ${
                showMenu ? "is-active" : null
              }`}
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          {showMenu && (
            <MobileMenu className="flex vertical between v-start">
              <MobileMenuList className="menu-list flex vertical v-start">
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
                      <Link activeClassName="active" to="/service/entwicklung">
                        Entwicklung
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
                  <Link activeClassName="active" to="/kontakt">
                    Kontakt
                  </Link>
                </li>
                <li className="cta-item">
                  <Link activeClassName="active" to="/anfrage">
                    Projektanfrage
                  </Link>
                </li>
              </MobileMenuList>
              <div className="flex v-center h-center">
                <img src={logo} alt="connect2 studio Logo" height="64" />
              </div>
            </MobileMenu>
          )}
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
                    <Link activeClassName="active" to="/service/entwicklung">
                      Entwicklung
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
                <Link activeClassName="active" to="/kontakt">
                  Kontakt
                </Link>
              </li>
              <li className="cta-item">
                <Link activeClassName="active" to="/anfrage">
                  Projektanfrage
                </Link>
              </li>
            </ul>
          </NavStyles>
        </div>
      </Container>
    </HeaderStyles>
  )
}

export default Header
