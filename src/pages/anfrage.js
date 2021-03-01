import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandingHero } from "../components/blocks/hero"

const EnquiryPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 203 }) {
        title
        metadata {
          description
        }
        heroFields {
          heroHeadline
          heroTagline
          heroText
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <LandingHero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
      />
    </Layout>
  )
}

export default EnquiryPage