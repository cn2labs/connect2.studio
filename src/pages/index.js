import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/styles/section"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTA from "../components/ui/cta"

import serviceImg from "../images/services.jpg"
import teamImg from "../images/team.jpg"

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
  color: transparent;
  font-size: 6rem;
  -webkit-text-stroke: 1px var(--mommys-blonde-boy);
  transition: color 0.1s ease;
  will-change: color;

  :hover {
    color: var(--mommys-blonde-boy);
    -webkit-text-stroke: 0 none;
    text-shadow: 0px 0px 20px rgb(255 255 255 / 50%);
  }
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

const Services = () => {
  return (
    <Section aside="Was wir machen">
      <ServiceGrid>
        <div>
          <ul>
            <li>
              <Link to="/service/entwicklung">
                <Service>Entwicklung</Service>
              </Link>
            </li>
            <li>
              <Link to="/service/design">
                <Service>Design</Service>
              </Link>
            </li>
            <li>
              <Link to="/service/consulting">
                <Service>Consulting</Service>
              </Link>
            </li>
          </ul>
          <p>
            Wir gestalten, entwickeln und konzipieren digitale Erlebnisse. Wir
            beraten. Wir schmeißen Dinge über den Haufen und bauen sie neu. Wir
            sind erst zufrieden wenn du es bist. Wir sind connect2 studio.
          </p>
          <CTA to="/service">Entdecke unseren Service</CTA>
        </div>
        <img src={serviceImg} alt="Unser Team" />
      </ServiceGrid>
    </Section>
  )
}

const Team = () => (
  <Section aside="Wer wir sind">
    <TeamStyles>
      <img src={teamImg} alt="Teamfoto" />
      <div className="ta-center">
        <h2>Die Crew</h2>
        <p>
          Liebe und Leidenschaft – das ist es, was uns täglich antreibt, was uns
          noch vor der ersten Mate mit Begeisterung packt und uns jeden Tag aufs
          neue rocken lässt. Wir haben mehr als die Motivation es jeden Tag
          besser zu machen – wir haben den Willen, weil wir es lieben.
        </p>
        <CTA to="/team">Lern uns kennen</CTA>
      </div>
    </TeamStyles>
  </Section>
)

const Frontpage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    query PageData {
      wpPage(databaseId: { eq: 2 }) {
        title
        content
        metadata {
          description
        }
        heroFields {
          headline
          text
          img {
            sourceUrl
            altText
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <Hero
        headline={page.heroFields.headline}
        text={page.heroFields.text}
        img={page.heroFields.img}
        link="/team"
      />
      <Services />
      <Team />
    </Layout>
  )
}

export default Frontpage
