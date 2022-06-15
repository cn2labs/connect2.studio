import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import ServiceContent from "../../components/blocks/service/serviceContent"

import Seo from "../../components/seo"
import { CustomHero } from "../../components/blocks/hero"

const DevelopmentPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 271 }) {
        title
        metadata {
          description
        }
        heroFields {
          heroHeadline
          heroTagline
          keywords
        }
        services_infoField {
          seviceContents {
            ... on wpPage_ServicesInfofield_SeviceContents_ServiceContent {
              text
              headline
              backgroundImg {
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
      }
    }
  `)
  return (
    <Layout>
      <Seo title={page.title} description={page.metadata.description} />
      <CustomHero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        keywords={page.heroFields.keywords}
      />

      {page.services_infoField.seviceContents.map((service, i) => (
        <ServiceContent key={i} data={service} />
      ))}
    </Layout>
  )
}

export default DevelopmentPage
