import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/blocks/hero"
import Section from "../../components/styles/section"

import ServiceBlock from "../../components/blocks/service/"
import RequestBlock from "../../components/blocks/request"

const ServicePage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 81 }) {
        title
        metadata {
          description
        }
        heroFields {
          heroCtaLabel
          heroCtaLink
          heroHeadline
          heroTagline
          heroText
          heroImg {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  aspectRatio: 1
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        service_serviceFields {
          servicesHeadline
          services {
            ... on wpPage_ServiceServicefields_Services_Service {
              tagline
              title
              link
              keywords {
                ... on wpPage_ServiceServicefields_Services_Service_Keywords_Keyword {
                  title
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
      <Hero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        img={page.heroFields.heroImg.localFile}
        imgAlt={page.heroFields.heroImg.altText}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <Section headline={page.service_serviceFields.servicesHeadline}>
        {page.service_serviceFields.services.map(service => (
          <ServiceBlock
            key={service.tagline}
            tagline={service.tagline}
            title={service.title}
            keywords={service.keywords}
            link={service.link}
          />
        ))}
      </Section>
      {/* <RequestBlock /> */}
    </Layout>
  )
}

export default ServicePage
