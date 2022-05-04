import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "../components/styles/container"

const Spacer = styled.div`
  padding: 11rem 0;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <Container>
      <Spacer>
        <h1>404: Not Found :(</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Spacer>
    </Container>
  </Layout>
)

export default NotFoundPage
