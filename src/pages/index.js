import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/styles/container"
import SEO from "../components/seo"

const IndexPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    query PageData {
      wpPage(databaseId: { eq: 2 }) {
        title
        content
        metadata {
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <Container>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </Layout>
  )
}

export default IndexPage
