import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/blocks/hero"

import StatsBlock from "../components/blocks/team/stats"
import MembersBlock from "../components/blocks/team/members"

const TeamPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 144 }) {
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
        team_teamFields {
          members {
            ... on wpPage_TeamTeamfields_Members_Member {
              name
              position
              mail
              quote
              img {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      formats: [AUTO, WEBP, AVIF]
                      width: 800
                      placeholder: BLURRED
                    )
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
      <SEO title={page.title} description={page.metadata.description} />
      <Hero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
        img={page.heroFields.heroImg.localFile}
        imgAlt={page.heroFields.heroImg.altText}
        link={page.heroFields.heroCtaLink}
        linkText={page.heroFields.heroCtaLabel}
      />
      <MembersBlock members={page.team_teamFields.members} />
      <StatsBlock members={page.team_teamFields.members.length} />
    </Layout>
  )
}

export default TeamPage
