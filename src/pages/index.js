import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import Section from "../components/styles/section"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTA from "../components/ui/cta"

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  justify-content: space-between;

  ul {
    list-style: none;
  }

  p {
    margin-top: 2.4rem;
  }
`

const Service = styled.h2`
  font-size: 6rem;
`

const TeamStyles = styled.div`
  div {
    margin-top: 6rem;
  }

  p {
    margin: 2rem auto 0;
    max-width: 70ch;
  }
`

const TeamImg = styled.div`
  background: url(${props => props.bg}) no-repeat center center / cover;
  height: 60rem;
  display: grid;
  place-items: center;

  :hover h2 {
    -webkit-text-stroke: 0 none;
    color: var(--mommys-blonde-boy);
    text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
  }
`

const TeamTitle = styled.h2`
  font-size: 10rem;
`

const Services = ({ text, img }) => (
  <Fade>
    <Section aside="What we do">
      <ServiceGrid>
        <div>
          <ul>
            <li>
              <Link to="/service/entwicklung">
                <Service className="is-outlined">Entwicklung</Service>
              </Link>
            </li>
            <li>
              <Link to="/service/design">
                <Service className="is-outlined">Design</Service>
              </Link>
            </li>
            <li>
              <Link to="/service/consulting">
                <Service className="is-outlined">Consulting</Service>
              </Link>
            </li>
          </ul>
          <p>{text}</p>
          <CTA to="/service">Unser Service</CTA>
        </div>
        <img src={img.sourceUrl} alt={img.altText} />
      </ServiceGrid>
    </Section>
  </Fade>
)

const Team = ({ text, img }) => (
  <Fade>
    <Section aside="Hello there">
      <TeamStyles>
        <TeamImg className="has-tape" bg={img.sourceUrl}>
          <TeamTitle className="is-outlined ta-center">
            <Link to="/team">Die Crew</Link>
          </TeamTitle>
        </TeamImg>
        <div className="ta-center">
          <p>{text}</p>
          <CTA to="/team">Unser Team</CTA>
        </div>
      </TeamStyles>
    </Section>
  </Fade>
)

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
      <Services
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
