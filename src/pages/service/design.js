import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { CustomHero } from "../../components/blocks/hero"

const DesignPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 271 }) {
        title
        metadata {
          description
        }
        heroFields {
          heroCtaLabel
          heroHeadline
          heroTagline
          keywords
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <CustomHero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        keywords={page.heroFields.keywords}
      />
    </Layout>
  )
}

export default DesignPage
