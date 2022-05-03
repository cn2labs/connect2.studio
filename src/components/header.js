import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../assets/images/logo_white.svg"
import logoDark from "../assets/images/logo_black.svg"
import Container from "./styles/container"

import { FiMoon } from "react-icons/fi"
import { CgSun } from "react-icons/cg"

// Darkmode
import { useDarkmode } from "../hooks/useDarkmode"

const HeaderStyles = styled.header`
  .darkmode-toggle:hover {
    cursor: pointer;
  }

  padding: 5rem 0;
  /* ==== = MEDIUM = ==== */
  @media only screen and (min-width: 48em) {
    padding: 5rem 0 12rem 0;
  }
`

const LogoStyles = styled.img`
  width: auto;
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

  /* Width in PX > 920px */
  /* ==== = BIG = ==== */
  @media only screen and (min-width: 62em) {
    --submenu-distance: 0.4rem;
    color: var(--almost-white);
    font-family: var(--headline-font);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: color 0.1s ease;

    div {
      margin-left: 3rem;
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
  z-index: 5;
  background-color: var(--mobile-menu);
  height: 100vh;
  width: 100%;
  padding: 30% 10% 20% 10%;
  a.active {
    color: var(--candy-strawberrys);
  }
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

const ModeSwitch = styled.div`
  margin-right: 2.75rem;
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

export const MenuItem = ({ link, children }) => {
  const enableScroll = () => {
    const body = document.querySelector("body")
    body.classList.remove("no-scroll")
  }

  return (
    <Link onClick={enableScroll} to={link} activeClassName="active">
      {children}
    </Link>
  )
}

const Header = () => {
  const [showMenu, setshowMenu] = useState(false)

  const menuActive = () => {
    setshowMenu(!showMenu)
    const body = document.querySelector("body")
    body.classList.toggle("no-scroll")
  }

  const isDark = useDarkmode(state => state.darkmode)
  const toggleDarkmode = useDarkmode(state => state.toggleDarkmode)

  return (
    <HeaderStyles>
      <Container>
        <div className="flex flex--between">
          {isDark ? (
            <Link title="connect2 studio Logo" to="/">
              <LogoStyles src={logo} alt="connect2 studio Logo" height="64" />
            </Link>
          ) : (
            <Link title="connect2 studio Logo" to="/">
              <LogoStyles
                src={logoDark}
                alt="connect2 studio Logo"
                height="64"
              />
            </Link>
          )}

          <div className="flex v-center bg-disappear">
            <ModeSwitch>
              {/****************************************************** Mobile Mode Toggler  */}
              {isDark ? (
                <CgSun onClick={toggleDarkmode} />
              ) : (
                <FiMoon onClick={toggleDarkmode} />
              )}
            </ModeSwitch>

            <button
              onClick={menuActive}
              className={` hamburger hamburger--minus ${
                showMenu ? "is-active" : null
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          {showMenu && (
            <MobileMenu className="flex vertical between v-start bg-disappear">
              <MobileMenuList className="menu-list flex vertical v-start">
                <li>
                  <MenuItem title="Home" link="/" activeClassName="active">
                    Home
                  </MenuItem>
                </li>
                <li className="has-submenu">
                  <MenuItem title="Service" activeClassName="active" link="/service">
                    Service
                  </MenuItem>
                  <ul>
                    <li>
                      <MenuItem
                        title="Entwicklung"
                        activeClassName="active"
                        link="/service/webentwicklung"
                      >
                        Entwicklung
                      </MenuItem>
                    </li>
                    <li>
                      <MenuItem title="Design" activeClassName="active" link="/service/webdesign">
                        Design
                      </MenuItem>
                    </li>
                    <li>
                      <MenuItem
                        title="Beratung"
                        activeClassName="active"
                        link="/service/beratung"
                      >
                        Beratung
                      </MenuItem>
                    </li>
                  </ul>
                </li>
                <li>
                  <MenuItem title="Team" activeClassName="active" link="/team">
                    Team
                  </MenuItem>
                </li>
                <li>
                  <MenuItem title="Projekte" activeClassName="active" link="/projekte">
                    Projekte
                  </MenuItem>
                </li>
                <li>
                  <MenuItem title="Kontakt" activeClassName="active" link="/kontakt">
                    Kontakt
                  </MenuItem>
                </li>
                <li>
                  <MenuItem title="Anfrage" activeClassName="active" link="/anfrage">
                    Projektanfrage
                  </MenuItem>
                </li>
              </MobileMenuList>
              <div className="flex v-center h-center">
                {isDark ? (
                  <Link title="connect2 Studio Logo" to="/">
                    <img src={logo} alt="connect2 studio Logo" height="64" />
                  </Link>
                ) : (
                  <Link title="connect2 Studio Logo" to="/">
                    <img
                      src={logoDark}
                      alt="connect2 studio Logo"
                      height="64"
                    />
                  </Link>
                )}
              </div>
            </MobileMenu>
          )}

          <NavStyles>
            <ul className="flex between">
              <li>
                <Link title="Home" to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li className="has-submenu">
                <Link title="Service" activeClassName="active" to="/service">
                  Service
                </Link>
                <ul>
                  <li>
                    <Link title="Webentwicklung" activeClassName="active" to="/service/webentwicklung">
                      Entwicklung
                    </Link>
                  </li>
                  <li>
                    <Link title="Webdesign" activeClassName="active" to="/service/webdesign">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link title="Beratung" activeClassName="active" to="/service/beratung">
                      Beratung
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link title="Team" activeClassName="active" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link title="Projekte" activeClassName="active" to="/projekte">
                  Projekte
                </Link>
              </li>
              <li>
                <Link title="Kontakt" activeClassName="active" to="/kontakt">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link title="Anfrage" activeClassName="active" to="/anfrage">
                  Projektanfrage
                </Link>
              </li>
            </ul>
            {/**************************************************************************************** Light and dark switch  */}
            <div className="flex v-center h-center darkmode-toggle">
              {isDark ? (
                <CgSun onClick={toggleDarkmode} />
              ) : (
                <FiMoon onClick={toggleDarkmode} />
              )}
            </div>
          </NavStyles>
        </div>
      </Container>
    </HeaderStyles>
  )
}

export default Header
