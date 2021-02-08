import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import AnimatedCursor from "react-animated-cursor"
import { useBrowser } from "../hooks/useBrowser"

import GlobalStyles from "./styles/globalStyles"
import Header from "./header"
import Footer from "./footer"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
`

const SideNotice = styled.aside`
  --color: var(--nets-court);

  font-family: var(--headline-font);

  :hover {
    --color: var(--almost-white);
  }

  .side-notice_text {
    color: var(--color);
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    transform: rotate(180deg) translateY(50%);
    transition: color 0.2s ease;
    position: absolute;
    top: 450px;
    left: 120px;
    z-index: 10;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .side-notice_year:before {
    background: var(--color);
    content: "";
    display: inline-block;
    height: 40px;
    margin: 16px 0;
    margin-left: -2px;
    width: 1px;
  }
`

const Layout = ({ children }) => {
  // Workaround to fix SSR
  const isBrowser = useBrowser()

  return (
    <PageContainer>
      <GlobalStyles />
      {isBrowser && <AnimatedCursor color="255, 255, 255" innerSize={10} />}
      <Header />
      <main>
        <div className="grain"></div>
        <SideNotice>
          <Fade cascade right delay={1000}>
            <div className="side-notice_text">
              <span className="side-notice_copyright">connect2 studio</span>
              <span className="side-notice_year">
                {new Date().getFullYear()}
              </span>
            </div>
          </Fade>
        </SideNotice>
        {children}
      </main>
      <Footer />
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
