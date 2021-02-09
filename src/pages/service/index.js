import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/blocks/hero"
import Section from "../../components/styles/section"
import Grid from "../../components/styles/grid"

import ServiceBlock from "../../components/blocks/service/serviceBlock"

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
          heroText
          heroImg {
            altText
            sourceUrl
          }
        }
        service_serviceFields {
          servicesHeadline
          services {
            ... on wpPage_ServiceServicefields_Services_Service {
              description
              title
              link
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
        img={page.heroFields.heroImg}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <Section headline={page.service_serviceFields.servicesHeadline}>
        <Grid>
          {page.service_serviceFields.services.map(service => (
            <ServiceBlock
              key={service.title}
              title={service.title}
              text={service.description}
              link={service.link}
            />
          ))}
        </Grid>
      </Section>
      <Section headline="Projekt anfragen"></Section>
    </Layout>
  )
}

export default ServicePage
