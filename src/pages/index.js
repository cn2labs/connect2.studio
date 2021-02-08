import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/hero"

import Service from "../components/blocks/frontpage/service"
import Team from "../components/blocks/frontpage/team"

const Frontpage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    query PageData {
      wpPage(databaseId: { eq: 2 }) {
        title
        metadata {
          description
        }
        home_serviceFields {
          serviceText
          serviceImg {
            altText
            sourceUrl
          }
        }
        home_teamFields {
          teamText
          teamImg {
            sourceUrl
          }
        }
        heroFields {
          heroCtaLabel
          heroCtaLink
          heroHeadline
          heroText
          heroImg {
            altText
            sourceUrl
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <Hero
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        img={page.heroFields.heroImg}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <Service
        text={page.home_serviceFields.serviceText}
        img={page.home_serviceFields.serviceImg}
      />
      <Team
        text={page.home_teamFields.teamText}
        img={page.home_teamFields.teamImg}
      />
    </Layout>
  )
}

export default Frontpage
