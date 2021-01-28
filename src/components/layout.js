import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

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

  .side-notice_text {
    color: var(--color);
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 50%;
    left: -30px;
    z-index: 10;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .side-notice_year:before {
    background: var(--color);
    content: "";
    display: inline-block;
    height: 1px;
    margin: 0 16px;
    margin-bottom: 4px;
    width: 50px;
  }
`

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyles />
      <Header />
      <main>
        <div className="grain"></div>
        <SideNotice>
          <Fade cascade bottom delay={1000}>
            <div className="side-notice_text">
              <span className="side-notice_copyright">© connect2 studio</span>
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
