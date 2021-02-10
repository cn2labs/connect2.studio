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
    {
      wpPage(databaseId: { eq: 2 }) {
        title
        metadata {
          description
        }
        home_serviceFields {
          serviceText
          serviceImg {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        home_teamFields {
          teamText
          teamImg {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        heroFields {
          heroCtaLabel
          heroCtaLink
          heroHeadline
          heroText
          heroImg {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
        img={page.heroFields.heroImg.localFile.childImageSharp.fluid}
        imgAlt={page.heroFields.heroImg.altText}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <Service
        text={page.home_serviceFields.serviceText}
        imgSrc={
          page.home_serviceFields.serviceImg.localFile.childImageSharp.fluid
        }
        imgAlt={page.home_serviceFields.serviceImg.altText}
      />
      <Team
        text={page.home_teamFields.teamText}
        bg={page.home_teamFields.teamImg.localFile.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default Frontpage
