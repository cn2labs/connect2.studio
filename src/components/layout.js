import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "./styles/globalStyles"
import Header from "./header"
import Footer from "./footer"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
