import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/styles/container"
import SEO from "../components/seo"
import Hero from "../components/hero"

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
        heroFields {
          headline
          text
          img {
            sourceUrl
            altText
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <Container>
        <Hero
          headline={page.heroFields.headline}
          text={page.heroFields.text}
          img={page.heroFields.img}
        />
      </Container>
    </Layout>
  )
}

export default IndexPage
