import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/hero"

import ContactBlock from "../components/blocks/contact"

const ContactPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 187 }) {
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
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        contact_fields {
          office
          contact
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <Hero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        img={page.heroFields.heroImg.localFile.childImageSharp.fluid}
        imgAlt={page.heroFields.heroImg.altText}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <ContactBlock data={page.contact_fields} />
    </Layout>
  )
}

export default ContactPage
