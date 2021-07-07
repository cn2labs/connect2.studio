import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import GlobalStyles from "./styles/globalStyles"
import "./styles/klaus-gridski.css"
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
    left: var(--side-notice-distance);
    z-index: 10;
    height: 100%;

    @media screen and (max-width: 1335px) {
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

const Layout = ({ children }) => (
  <PageContainer className="page-transition">
    <GlobalStyles />
    <Header />
    <main>
      <div className="grain"></div>
      <SideNotice>
        <Fade cascade right delay={500}>
          <div className="side-notice_text">
            <span className="side-notice_copyright">connect2 studio</span>
            <span className="side-notice_year">{new Date().getFullYear()}</span>
          </div>
        </Fade>
      </SideNotice>
      {children}
    </main>
    <Footer />
  </PageContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
