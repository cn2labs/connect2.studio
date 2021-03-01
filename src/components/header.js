import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 20px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: var(--candy-strawberrys);
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`

const SmallPrint = styled.p`
  font-size: 1rem;
  font-family: var(--headline-font);
  margin-top: 3px;
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
  z-index: 5;
  background-color: var(--black-carbon);
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
  return (
    <HeaderStyles>
      <Container>
        <div className="flex flex--between">
          <Link to="/">
            <LogoStyles src={logo} alt="connect2 studio Logo" height="64" />
          </Link>
          <div className="bg-disappear">
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
            <MobileMenu className="flex vertical between v-start bg-disappear">
              <MobileMenuList className="menu-list flex vertical v-start">
                <li>
                  <MenuItem link="/" activeClassName="active">
                    Home
                  </MenuItem>
                </li>
                <li className="has-submenu">
                  <MenuItem activeClassName="active" link="/service">
                    Service
                  </MenuItem>
                  <ul>
                    <li>
                      <MenuItem
                        activeClassName="active"
                        link="/service/entwicklung"
                      >
                        Entwicklung
                      </MenuItem>
                    </li>
                    <li>
                      <MenuItem activeClassName="active" link="/service/design">
                        Design
                      </MenuItem>
                    </li>
                    <li>
                      <MenuItem
                        activeClassName="active"
                        link="/service/beratung"
                      >
                        Beratung
                      </MenuItem>
                    </li>
                  </ul>
                </li>
                <li>
                  <MenuItem activeClassName="active" link="/team">
                    Team
                  </MenuItem>
                </li>
                <li>
                  <MenuItem activeClassName="active" link="/projekte">
                    Projekte
                  </MenuItem>
                </li>
                <li>
                  <MenuItem activeClassName="active" link="/kontakt">
                    Kontakt
                  </MenuItem>
                </li>
                <li className="cta-item">
                  <MenuItem activeClassName="active" link="/anfrage">
                    Projektanfrage
                  </MenuItem>
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
        <div className="flex vertical v-end">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Switch>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
                <span></span>
              </Switch>
            )}
          </ThemeToggler>
          <SmallPrint>Light/Dark</SmallPrint>
        </div>
      </Container>
    </HeaderStyles>
  )
}

export default Header
